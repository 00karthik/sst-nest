const { esbuildDecorators } = require('@anatine/esbuild-decorators');

module.exports = {
  plugins: [esbuildDecorators({ tsconfig: './tsconfig.json' })],
};
