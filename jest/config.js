const { defaults } = require("jest-config");

module.exports = {
  rootDir: "../",
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/jest/preprocess.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupAfterEnv.js"],
  setupFiles: ["<rootDir>/jest/setup.js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file.js",
  },
  testPathIgnorePatterns: ["node_modules", ".cache"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  globals: {
    __PATH_PREFIX__: "",
    __BASE_PATH__: "",
  },
};
