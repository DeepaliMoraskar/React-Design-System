const fs = require('fs');
const path = require('path');
const sass = require('sass');

const rootDir = path.resolve(__dirname, '../../'); 
// → packages/scss

const srcFile = path.join(rootDir, 'src/global.scss');
const outDir = path.join(rootDir, 'dist');
const outFile = path.join(outDir, 'global.css');

// Ensure dist exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

try {
  const result = sass.compile(srcFile, {
    style: 'expanded',
    loadPaths: [
      path.join(rootDir, 'src'),
      path.resolve('node_modules'),
    ],
  });

  fs.writeFileSync(outFile, result.css);
  console.log('✅ global.css built successfully');
} catch (error) {
  console.error('❌ Build failed');
  console.error(error);
  process.exit(1);
}
