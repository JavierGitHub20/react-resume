module.exports = {
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}"
    ],
    coverageReporters: [
      "text",
      "lcov"
    ],
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx)$": "babel-jest",
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.css$": "<rootDir>/__mocks__/styleMock.js"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!your-module-to-transform).+\\.js$"
    ],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ]
  };
  