import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      instances: [
        { browser: 'chromium' }, // This replaces name: 'chromium'
      ],
      provider: playwright(),
    },
    setupFiles: ['./.storybook/vitest.setup.ts'],
  },
  plugins: [
    storybookTest({ configDir: '.storybook' }),
  ],
});