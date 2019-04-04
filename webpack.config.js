var path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",


    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,

    // ファイルの出力設定
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/dist/",    //ブラウザからバンドルにアクセスする際のパス
        filename: "main.js"    // 出力ファイル名
    },
    module: {
        rules: [
          // Sassファイルの読み込みとコンパイル
          {
            test: /\.scss/, // 対象となるファイルの拡張子
            use: [
              // linkタグに出力する機能
              "style-loader",
              // CSSをバンドルするための機能
              {
                loader: "css-loader",
                options: {
                  // オプションでCSS内のurl()メソッドの取り込みを禁止する
                  url: false,
                  // ソースマップの利用有無
                
    
                  // 0 => no loaders (default);
                  // 1 => postcss-loader;
                  // 2 => postcss-loader, sass-loader
                  importLoaders: 2
                }
              },
              {
                loader: "sass-loader",
                
              }
            ]
          }
        ]
      },

    
  
    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        openPage: "index.html",//自動で指定したページを開く
        contentBase: path.join(__dirname, 'public'),
        open: true,
        watchContentBase: true
    }
  };