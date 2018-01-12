"use strict";

const lactate = require('../models').lactate;

exports.list = function (req, res) {
  lactate.findAll().then(lactate => {
    res.jsonp(lactate);
  });
};

exports.create = function (req, res) {
  res.jsonp(lactate.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  lactate.findById(id).then(lactate => {
    res.jsonp(lactate);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  lactate.findById(id).then(lactate => {
    lactate.update(req.body);
  });
  res.jsonp(lactate);
};

exports.delete = function (req, res) {
  let id = req.params.id;
	lactate.findById(id).then(lacate => {
	  if(lacate) {
	    lacate.destroy();
	    res.jsonp(lacate);
	  }
	  else
	    res.status(500).send('Object Not Found');
	});  
};
