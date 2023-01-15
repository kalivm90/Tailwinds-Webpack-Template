# Steps on how to install

npm install -D @babel/core @babel/preset-env babel-loader html-webpack-plugin webpack webpack-cli

# In webpack.config.js
```
  module : {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
            }
        }
    ]
  }
```

# make a .babelrc.js file and inside use this
```
module.exports = function(api) {
    api.cache(true);
    const presets = ['@babel/preset-env'];
    return {
        presets
    }
}
```

# Inside package.json
```
    "browserslist": "> 0.25%, not dead",
```

# TO TEST

Put arrow functions in src/index.js as well as let
$ npm run build
check dist/main.js to see if the arrow functions and "let" are not complied into dist file and you should be good
