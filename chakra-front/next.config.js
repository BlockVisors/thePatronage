
const withPWA = require("next-pwa");

module.exports = withPWA({
   
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
  },
  env: {
    siteUrl: "https://choc-ui.tech",
    githubRepo: "anubra266/choc-ui",
    githubChoc: "https://github.com/anubra266/choc-ui",
    githubUrl: "https://github.com/anubra266",
    twitterUrl: "https://twitter.com/anubra266",
    linkedinUrl: "https://linkedin.com/in/anubra266",
    emailAddress: "anubra266@gmail.com",
    discordUrl: "https://discord.gg/XcD8bNv7Ne",
    twitterChoc: "https://twitter.com/choc_ui",
    sponsorLink: "https://patreon.com/anubra266",
  },
    images: {
    domains: ["images.unsplash.com", "ipfs.io"],
  },
  reactStrictMode: false,
});