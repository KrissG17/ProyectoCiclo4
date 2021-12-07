let { Router } = require('express');
let authController = require('../controllers/authController');

let router = Router();

router.post('/registro', authController.postRegistrar);
router.post('/iniciar-sesion', authController.postIniciarSesion);
router.post('/cerrar-sesion', authController.postCerrarSesion);
router.get('/revisar-usuario', authController.revisarUsuario);
router.get('/revisar-libro', authController.revisarLibro);

module.exports = router;
