const path = require('path');

module.exports = {
  entry: './index.html', // ruta del archivo de entrada
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
