const express = require('express');
const router = express.Router();

router.get('/about',(req,res)=>{
    obj = {
        a:'thios',
        number: 34
    }
    res.json(obj)
})

module.exports = router