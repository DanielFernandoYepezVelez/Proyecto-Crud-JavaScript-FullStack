/* Variables de entorno y Entorno de ejecución */
if(process.env.NODE_ENV !== 'production'){
  /* Ejecuta las variable de entorno */
  require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());

// Que el servidor entienda las imagenes que se le están enviando.
// Configurando la función multer.
const storage = multer.diskStorage({
  destination: path.join(__dirname, './public/uploads/'),
  filename(req, file, callBack){
    callBack(null, new Date().getTime() + path.extname(file.originalname));
  }
});
// Estamos ejecutando la función multer.
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes rest-API
app.use('/api/books', require('./routes/api/books'));

// Static Files
app.use(express.static(path.join(__dirname, './public/')));

// Starting The Server 
app.listen(app.get('port'), () => {
  console.log(`Server On Port ${app.get('port')}`);
});