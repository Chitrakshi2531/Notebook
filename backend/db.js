const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Chitraskhi2531:Chitrakshi@atlascluster.yhcoeua.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection Successfull");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectToMongo;