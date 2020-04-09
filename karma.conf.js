/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*

        {
          pattern: config.grep ? config.grep : './src/packages/components/**/**/**/*.test.ts',
          type: 'module',
        },
      ],

      esm: {
        babel: true,
        nodeResolve: true,
        fileExtensions: ['.ts'],
        customBabelConfig: {
          plugins: [
            [
              '@babel/plugin-proposal-decorators',
              {
                decoratorsBeforeExport: true,
              },
            ],
            '@babel/plugin-proposal-class-properties',
          ],
          presets: ['@babel/preset-typescript'],
        },
      },
    }),
  );
  return config;
};
