const express = require('express');
const router = express.Router();
const RecipeApi = require('./recipe');
router.get('/', (req, res, next)=>{
    
    res.status(200).json({"ok":"examen1"});
    });

    router.use('/recipe', RecipeApi);
module.exports = router;