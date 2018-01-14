"use strict";

const legume = require('../models').fructe;

exports.list = function (req, res) {
  legume.findAll().then(legume => {
    res.jsonp(legume);
  });
};

exports.create = function (req, res) {
  res.jsonp(legume.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  legume.findById(id).then(legume => {
    res.jsonp(legume);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  legume.findById(id).then(legume => {
    legume.update(req.body);
  });
  res.jsonp(legume);
};

exports.delete = function (req, res) {
  let id = req.params.id;
	legume.findById(id).then(legume => {
	  if(legume) {
	    legume.destroy();
	    res.jsonp(legume);
	  }
	  else
	    res.status(500).send('Object Not Found');
	});  
};
