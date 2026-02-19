import typescript from 'rollup-plugin-typescript2';
import tsConfigPaths from 'rollup-plugin-tsconfig-paths'; // 1. Import

export default {
  input: [
    'src/index.ts',
    'src/atoms/Colors/index.ts',
    'src/atoms/Margin/index.ts',
    'src/atoms/Button/index.ts',
    'src/molecule/Select/index.ts'
  ],

  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,

    // 🔑 Key options
    preserveModules: true,
    preserveModulesRoot: 'src'
  },

  plugins: [
    tsConfigPaths(), 
    typescript({
      tsconfig: '../../tsconfig.base.json',
      // Force rpt2 to use these paths if it misses them in tsconfig
      declaration: false, // let `tsc -p tsconfig.build.json` emit types
      clean: true
    })
  ],

  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    '@react.ds/foundation',
    '@storybook/react-vite'
  ]
};
