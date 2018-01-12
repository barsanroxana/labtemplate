"use strict";

const carne = require('../models').carne;

exports.list = function (req, res) {
  carne.findAll().then(carne => {
    res.jsonp(carne);
  });
};

exports.create = function (req, res) {
  res.jsonp(carne.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  carne.findById(id).then(carne => {
    res.jsonp(carne);
  });
};

exports.update = function (req, res) {
  let id = req.params.id;
  carne.findById(id).then(carne => {
    carne.update(req.body);
  });
  res.jsonp(carne);
};

exports.delete = function (req, res) {
  let id = req.params.id;
	carne.findById(id).then(carne => {
	  if(carne) {
	    carne.destroy();
	    res.jsonp(carne);
	  }
	  else
	    res.status(500).send('Object Not Found');
	});  
};
