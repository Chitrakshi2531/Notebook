const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_code = 'code';

//express-validator
const registerValidator = [
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','password should be of 5 characters').isLength({ min: 5 }),
    body('phone','Enter a valid number').isLength({ min:10 , max: 10}),
];

// ROUTE 1: Register User using: POST "/auth/register"
router.post('/register', registerValidator , async (req, res) => {
    
    // handling validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    
    const {name,email,phone,password} = req.body;

    //creating encrypt password with salt using bcryptjs
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password,salt);

    const user = new User({name,email,phone,password: secPassword});
    success = false;
    // saving data to mongo
    user.save()
        .then(() => {
            const data ={
                user:{
                    id : user.id,
                }
            }
            const authToken = jwt.sign(data,JWT_code);

            success = true;
            res.json({success , msg : "User added successfully",authToken});
        })
        .catch(err => {

            // 11000 error for duplicate email
            if(err.code === 11000)
            {
                res.status(401).json({success});
            }
            else
            res.status(500).json({success , err});
        });
});



const loginValidator = [
    body('email','Enter a valid email').isEmail(),
];

// ROUTE 2: loggedin User using: POST "/auth/login"
router.post('/login', loginValidator , async (req, res) => {
    
    // handling validation error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    
    const {email,password} = req.body;
    success = false;
    
    try{
        const user = await User.findOne({email});
        if(!user){
            res.status(401).json({success,msg: "Invalid Credential"});
        }
        //checking password using bcryptjs
        const passCompare = await bcrypt.compare(password,user.password); 
            
        if(!passCompare){
            res.status(401).json({success,msg: "Invalid Credential"});
        }

        const data ={
            user:{
                id : user.id,
            }
        }
        const authToken = jwt.sign(data,JWT_code);
        success=true;
        
        res.json({success,authToken});
        
    }
    catch(err){
        res.status(500).json({success,err})
    }
    
});

// ROUTE 3: Get loggedin User Details using: POST "/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res)=> {
    try {
        userId = req.user.id;
        const user = await User.findById (userId).select("-password");
        res.send(user);
    } catch (error) {
        res.status (500).send ("Internal Server Error");
    }
})

module.exports = router