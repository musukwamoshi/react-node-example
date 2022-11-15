/**
 * We use customize-cra to make changes to webpack
 * without ejecting from CRA
 *
 * Documentation: https://github.com/arackaf/customize-cra/blob/master/api.md
 **/

/* eslint-disable */

// dotenv config has to happen before other imports
// because some of them rely on environment variables (like ./config/passport)
const { config } = require("dotenv");
const path = require("path");
config({ path: path.join(__dirname, "../.env") });

const CircularDependencyPlugin = require("circular-dependency-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const {
  addPostcssPlugins,
  addWebpackAlias,
  addWebpackPlugin,
  babelInclude,
  override,
  overrideDevServer,
  removeModuleScopePlugin,
  watchAll
} = require("customize-cra");
const { overridePassedProcessEnv } = require("cra-define-override");

module.exports = {
  webpack: override(
    // Environment variables
    overridePassedProcessEnv([
      "REACT_APP_SEGMENT_WRITE_KEY",
      "REACT_APP_GOOGLE_MAPS_API_KEY",
      "ROOT_URL",
      "HEROKU_APP_NAME"
    ]),
    /**
     * Webpack does not try to resolve or warn about dependency cycles.
     * It just leaves one of the files in the cycle blank. Difficult bugs follow
     * circular-dependency-plugin detects cycles and fails the build
     **/
    addWebpackPlugin(new CircularDependencyPlugin({ failOnError: true })),
    // Adds the required JS build for tailwindcss
    addPostcssPlugins([tailwindcss("./tailwind.config.js"), autoprefixer]),
    // Removes CRA's prohibition on importing files outside src/ (for our shared/)
    removeModuleScopePlugin(),
    // Forces webpack to use our custom eslint config
    //useEslintRc(path.resolve(__dirname, ".eslintrc.json")),
    // Allow project-relative module resolution
    addWebpackAlias({
      ["~"]: path.resolve(__dirname, "src")
    }),
    // Allow TypeScript to compile files outside of src/
    babelInclude([
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "../shared")
    ])
  ),
  devServer: overrideDevServer(
    // Watch all files including new/upgraded modules
    watchAll()
  )
};