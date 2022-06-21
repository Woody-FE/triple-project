const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 보통 저는 사용합니다.

module.exports = {
  entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${path.resolve(__dirname, "../src")}/index.html`,
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "../src/hooks/"),
      "@views": path.resolve(__dirname, "../src/views/"),
      "@styles": path.resolve(__dirname, "../src/styles/"),
      "@pages": path.resolve(__dirname, "../src/pages/"),
      "@common": path.resolve(__dirname, "../src/components/common/"),
      "@base": path.resolve(__dirname, "../src/base/"),
      "@components": path.resolve(__dirname, "../src/components/"),
      "@images": path.resolve(__dirname, "../src/assets/images/"),
      "@utils": path.resolve(__dirname, "../src/utils/"),
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
