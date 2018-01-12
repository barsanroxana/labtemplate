var express = require('express');
var router = express.Router();
var lactate = require('../service/').lactate;

router.get('/', lactate.list);
router.get('/:id', lactate.findById);
router.get('/delete/:id', lactate.delete);
router.post('/', lactate.create);
router.put('/:id', lactate.update);

module.exports = router;