module.exports = {
  reactScriptsVersion: "react-scripts",
  style: {
    css: {
      loaderOptions: () => {
        return {
          url: false,
        };
      },
    },
  },
  // Add this function to modify build output directory
  paths: function (paths, env) {
    paths.appBuild = paths.appPath + '/docs';
    return paths;
  }
};
