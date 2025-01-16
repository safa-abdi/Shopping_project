module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest', // Handle JS/JSX files
      '^.+\\.mjs$': 'babel-jest', // Handle .mjs files (for ESM)
    },
    transformIgnorePatterns: [
        "/node_modules/(?!axios)/"
      ]
  };
  