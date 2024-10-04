/* eslint-env node */

export default {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",

    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/npm",
      {
        npmPublish: true,
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
