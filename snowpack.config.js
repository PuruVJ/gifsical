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
    '@assets': './src/assets',
    '@components': './src/components',
    '@helpers': './src/helpers',
    '@constants': './src/constants',
  },
};
