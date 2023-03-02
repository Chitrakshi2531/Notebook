// const connectToMongo = require('./db');
// const express = require('express');

// connectToMongo();
// const app = express()
// const port = 3000

// //Available routes
// app.use('/api/auth',require('./routes/login'))
// //app.use('/api/notes',require('./routes/notes'))


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');



mongoose.connect('mongodb+srv://dbGautum:Kamlesh@cluster0.entrtz5.mongodb.net/mongo?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
      type: String,
      required: true
    }

    
});

const Student = mongoose.model('Student', studentSchema);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.post('/register', (req, res) => {
  const {name,email,phone,password} = req.body;
    const student = new Student(req.body);
    student.save()
        .then(() => {
            res.send('Student added successfully');
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});