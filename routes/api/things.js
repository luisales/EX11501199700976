const express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');
var thingsCollection = [];
var datos = {
    "id": 0,
    "receta":'',
    "precio": 0,
    "tipo": '',
    "observacion": '',
    "estado": ''
}; 
router.get('/', (req, res, next) =>{
    res.status(200).json(thingsCollection);
});

module.exports = router;

