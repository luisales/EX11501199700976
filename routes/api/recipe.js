const express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');
var recipeCollection = [];
var datos = {
    "id": 0,
    "receta":'',
    "precio": 0,
    "tipo": '',
    "observacion": '',
    "estado": ''
}; 
recipeCollection.push(
    Object.assign({},datos,{"id":uuid(), "receta":"RecetaPrueba","precio":"2500.00", "tipo":"Capsula","observacion":"Cada 5 Días","estado":"Activo"})

);
router.get('/', (req, res, next) =>{
    res.status(200).json(recipeCollection);
});

router.post('/',(req, res, next)=>{
    var newElement = Object.assign({},datos,{"id":uuid()}, req.body);
    recipeCollection.push(newElement);

    res.status(200).json(newElement);

}); 

module.exports = router;

