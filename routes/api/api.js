const express = require('express');
const router = express.Router();
const ThingsApi = require('./things');
router.get('/', (req, res, next)=>{
    
    res.status(200).json({"ok":"examen1"});
    });

    router.use('/things', ThingsApi);
module.exports = router;