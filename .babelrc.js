// configure tree shaking when using grouped import syntax
const plugins = [
  [
    'babel-plugin-direct-import',
    { modules: ['@mui/material'] },
  ],
];

module.exports = { plugins };