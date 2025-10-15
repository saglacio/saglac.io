import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
    globals: true,
    environmentMatchGlobs: [
      ['**/__tests__/**/*.tsx', 'jsdom'],
      ['**/*.test.tsx', 'jsdom'],
    ],
    exclude: ['node_modules', 'e2e/**', 'dist', '.next', 'out'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: [
        'lib/**/*.{js,ts}',
        'components/**/*.{jsx,tsx}',
        'app/**/*.{js,ts,jsx,tsx}',
        'hooks/**/*.{js,ts}',
      ],
      exclude: [
        'node_modules/',
        'e2e/**',
        '**/*.test.{js,ts,jsx,tsx}',
        '**/*.spec.{js,ts,jsx,tsx}',
        '**/types.ts',
        'components/ui/**', // Exclude shadcn/ui components
        'app/layout.tsx', // Exclude root layout
        'app/**/page.tsx', // Exclude page files (they're just component wrappers)
        'app/globals.css',
        'vitest.config.mjs',
        'next.config.mjs',
        'postcss.config.mjs',
        'tailwind.config.ts',
        'components/theme-provider.tsx', // External library wrapper
        'hooks/use-toast.ts', // shadcn/ui hook
        'hooks/use-mobile.ts', // Simple media query hook
      ],
      thresholds: {
        statements: 40,
        branches: 70,
        functions: 60,
        lines: 40,
      },
      all: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})

