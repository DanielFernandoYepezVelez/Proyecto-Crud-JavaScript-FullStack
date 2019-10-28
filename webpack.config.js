/* path desde node para adjuntar directorios, desde la carpeta FRONTEND */
const path = require('path');

/* el codigo minificado de JS debe estar adjuntado en un HTML para que el navegador lo interprete correctamente */
const htmlWebpackPlugin = require('html-webpack-plugin');

const miniCssExtractPlugin = require('mini-css-extract-plugin');

/* Esta constante obtiene un tipo de dato BOOLEANO y esta estableciendo el entorno de ejecución de las variables de entorno */
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  /* Generar un archivo JS en la carpeta public del Backend */
  /* codigo principal del frontend */
  entry: './frontend/app.js',

  /* Salida, es decir, el codigo que va a salir del frontend a donde va a terminar */
  output: {
    path: path.join(__dirname, './backend/public/'),

    /* crea este archivo dentro de la carpeta js */
    filename: 'js/bundle.js'
  },

  /* En que entorno de ejecución estamos */
  // mode: 'development',
  mode: 'production', //para minificar el codigo de js
  
  /* Generar un archivo CSS en la carpeta public del Backend */
  module: {
    rules: [
      {
        /* Extesiones de los archivos CSS que se deben identificar */
        test: /\.css/,

        /* style-loader carga todo lo de css en el archivo js que en este caso es bundle.js */
        use:[

          /* Si estoy en desarrollo carga los estilos dentro de JS si estoy en producción cargalos en su propio archivo de CSS */
          devMode ? 'style-loader' : miniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },


  /* Elementos necesario para que el codigo HTML sea minificado */
  plugins: [
    new htmlWebpackPlugin({
      template: './frontend/index.html',
      minify:{
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),

  /* Elementos necesario para que el codigo CSS sea minificado */
    new miniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],

  /* Ver en que linea estoy cometiendo algun error */
  devtool: 'source-map'
}