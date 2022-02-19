module.exports = function (eleventyConfig) {
  // Add CSS support
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addWatchTarget(".src/css");

  // Add image support
  eleventyConfig.addPassthroughCopy("./src/img/");
  return {
    dir: {
      input: "src",
    },
  };
};
