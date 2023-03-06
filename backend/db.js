const mongoose = require('mongoose');
const mongoURI = "mongodb://dbGautum:Kamlesh@ac-k33on3k-shard-00-00.entrtz5.mongodb.net:27017,ac-k33on3k-shard-00-01.entrtz5.mongodb.net:27017,ac-k33on3k-shard-00-02.entrtz5.mongodb.net:27017/?ssl=true&replicaSet=atlas-agjg2h-shard-0&authSource=admin&retryWrites=true&w=majority ";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection Successfull");
    }).catch((err)=>{
        console.log(err);
    })
}
module.exports = connectToMongo;