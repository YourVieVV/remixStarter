module.exports = {
  extends: ['@remix-run/eslint-config', 'prettier'],
  ignorePatterns: [
    '/node_modules',
    '/build',
    '/public/build',
    '/app/entry.server.tsx',
    '/server.js',
  ],
};
