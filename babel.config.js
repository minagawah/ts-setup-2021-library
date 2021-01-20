module.exports = {
	presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          esmodules: true,
          node: 'current', // for jest
        },
      },
    ],
    '@babel/preset-typescript',
	],
};

