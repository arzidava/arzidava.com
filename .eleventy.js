
module.exports = function(eleventyConfig) {
    
    // Copy the `img` and `css` folders to the output
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
          input: "src",
          output: "build"
        }
      }
}