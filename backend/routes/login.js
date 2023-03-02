const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    obj = {
        a:'thios',
        number: 34
    }
    res.json(obj)
})

module.exports = router