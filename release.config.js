/* eslint-env node */

module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",

    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: ["docs/CHANGELOG.md"],
      },
    ],
  ],
};
