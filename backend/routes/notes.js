const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Note = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');

//ROUTE 1: Get All the Notes using: GET "/api/auth/getuser". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
    try{
        const notes = await Note.find ({ user: req.user. id });
        res.json (notes);
    }
    catch (error)
    {
        res.status(500).send( "Internal Server Error");
    }
});

//ROUTE 2: Add a new Note using: POST "/api/auth/addnote". Login required
const addValidator =  [
    body("title", 'Enter a valid title') . isLength ({min: 3 }),
    body("description", "Description must be atleast 5 gharacters "). isLength ({ min: 5 })
];

router.post("/addnote", fetchuser, addValidator , async (req, res) => {
    try{
        const {title, description, tag } = (req.body);
        const errors = validationResult(req);
        if (!errors. isEmpty())
        { 
            return res.status(400).json({errors: errors.array()});
        }
        
        const note = new Note({user: req.user.id, title, description, tag});
        console.log(note);
        const savedNote = await note.save();
        res.json(savedNote);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
    
});
module.exports = router;