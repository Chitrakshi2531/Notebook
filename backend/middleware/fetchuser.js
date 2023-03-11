var jwt = require('jsonwebtoken');
const JWT_SECRET = 'code';


const fetchuser = (req, res, next)=>{
    // Get the user from the jwt token and add id to req object
    console.log(req.cookies.token);
    const token = req.cookies.token;
    if(!token) {
        console.log("no token");
        return res.status(401).send({error: "Please authenticate using a token"})
    }
    try{
        const data = jwt.verify (token, JWT_SECRET);
        req.user = data.user;
        next(); 
    }
    catch(err){
        console.log("not valid token");
       return res.status(401).send({error: "Please authenticate using a valid token"})
    }
}


module.exports = fetchuser;