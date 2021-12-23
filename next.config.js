const PackageJson = require("./package.json");
const repositoryName = PackageJson.name;
const isProd = process?.env?.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? `/${repositoryName}/` : "",
  basePath: isProd ? `/${repositoryName}` : "",
};
