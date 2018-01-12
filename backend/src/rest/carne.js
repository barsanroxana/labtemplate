var express = require('express');
var router = express.Router();
var carne = require('../service/').carne;

router.get('/', carne.list);
router.get('/:id', carne.findById);
router.get('/delete/:id', carne.delete);
router.post('/', carne.create);
router.put('/:id', carne.update);

module.exports = router;