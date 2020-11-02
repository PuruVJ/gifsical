module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
      },
    ],
    // [
    //   '@snowpack/plugin-webpack',
    //   {
    //     sourceMap: true,
    //   },
    // ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
    __assets: './src/assets',
    __components: './src/components',
    __helpers: './src/helpers',
    __constants: './src/constants',
    __theme__: './src/theme.ts',
  },
};
