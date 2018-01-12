var express = require('express');
var router = express.Router();
var legume = require('../service/').legume;

router.get('/', legume.list);
router.get('/:id', legume.findById);
router.get('/delete/:id', legume.delete);
router.post('/', legume.create);
router.put('/:id', legume.update);

module.exports = router;