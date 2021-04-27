// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Arges",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-graphql",
      options: {
        url: "https://api.github.com/graphql",
        fieldName: "github",
        typeName: "github",
        headers: {
          Authorization: `Bearer ${process.env["GITHUB_TOKEN"]}`,
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Doc",
        baseDir: "./content/docs",
        pathPrefix: "/docs",
        path: "*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Guide",
        baseDir: "./content/guides",
        pathPrefix: "/guides",
        path: "*.md",
      },
    },
  ],
  transformers: {
    remark: {},
  },
};
