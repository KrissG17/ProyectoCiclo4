const Libro = require('../models/Libro');

module.exports.test = (req, res) => {
  console.log('imprime apiController');
  const { id } = res.locals.user;
  console.log(id);
  // const token = req.cookies.jwt;
  // console.log(token);
  //   getlibros = async function() => {
  //     const libro = await Libro.find()
  //     res.json(libro);
  //     getlibros = libro;
  //   }
  res.send('Respuesta API =  Id de usuario: ' + id);
};
