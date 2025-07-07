import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults, coverageConfigDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      exclude: [...configDefaults.exclude, 'e2e/**'],
      coverage: {
        exclude: [...coverageConfigDefaults.exclude, 'e2e/**', 'playwright.config.ts', 'public/**'],
      },
      root: fileURLToPath(new URL('./', import.meta.url)),
      css: { modules: { classNameStrategy: 'non-scoped' } },
    },
  }),
)
