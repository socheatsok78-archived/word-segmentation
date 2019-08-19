module.exports =  {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.worker\.js$/,
          use: {
            loader: 'worker-loader',
            options: {
              name: 'worker/[hash].worker.js',
            }
          }
        }
      ]
    }
  }
};
