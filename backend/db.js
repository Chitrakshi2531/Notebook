const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dbGautum:Kamlesh@cluster0.entrtz5.mongodb.net/mongo?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection Successfull");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectToMongo;