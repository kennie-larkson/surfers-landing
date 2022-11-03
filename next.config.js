/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "jsonkeeper.com", "images.unsplash.com"],
  },
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/kennie-larkson/kennie-larkson.github.io/gh-pages/"
    : "",
};
