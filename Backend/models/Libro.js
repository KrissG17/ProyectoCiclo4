const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  libroId: {
    required: [true, 'Digita libroId porfavor!'],
    index: true,
    type: String,
  },
  nombre: {
    required: [true, 'Digita el nombre porfavor!'],
    type: String,
    lowercase: true,
  },
  categoria: {
    required: [true, 'Digita la categoria porfavor!'],
    type: String,
    lowercase: true,
  },
  autor: {
    required: [true, 'Digita el autor porfavor!'],
    type: String,
    lowercase: true,
  },
});

const Libro = mongoose.model('Libro', libroSchema);

module.exports = Libro;
