import type { Config } from 'jest'

const config: Config = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['node_modules'],
}

export default config
