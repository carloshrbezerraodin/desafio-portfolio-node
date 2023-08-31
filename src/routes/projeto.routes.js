const router = require('express-promise-router')();
const projetoController = require('../controllers/projeto.controller');
router.post('/projeto', projetoController.createProjeto);
router.get('/projeto', projetoController.listAllProjetos);
router.get('/projeto/:id', projetoController.findProjetoById);
router.put('/projeto/:id', projetoController.updateProjetoById);
router.delete('/projeto/:id', projetoController.deleteProjetoById);
module.exports = router;