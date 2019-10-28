const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));

/* Después de la conexión puedo obtener dos
eventos que son =>
1. Se conecta a la BD Correctamente .then()
    Cuando pasa el primer evento, el me devuelve
    un objeto en el parametro db y muestro por
    consola un mensaje exitoso que es mas amigable
    que el objeto que devuelve el .then!!

2. No se conecta a la BD Correctamente .catch()
    Cuando pasa el segundo evento, el me devuelve
    un objeto en el parametro err y muestro por
    consola el mensaje de error y así, em ayuda
    a identificar de forma mas rapida, donde esta
    el error!! */