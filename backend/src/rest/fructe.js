var express = require('express');
var router = express.Router();
var fructe = require('../service/').fructe;

router.get('/', fructe.list);
router.get('/:id', fructe.findById);
router.get('/delete/:id', fructe.delete);
router.post('/create', fructe.create);
router.put('/:id', fructe.update);

module.exports = router;