/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-03-26 19:26:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-03-28 23:35:46
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-loader.min.js');
} else {
  module.exports = require('./react-loader.js');
}
