const express = require('express');
const dotEnv = require("dotenv");
const mongoose = require('mongoose');

const app = express();
dotEnv.config();
const PORT = process.env.PORT || 3000;

const mongoDBUrl = process.env.MONGO_URL;
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB successfully!');
});

app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});
// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     validate: {
//       validator: function(value) {
        
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       },
//       message: 'Invalid email address'
//     }
//   }
// });
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', userSchema);


async function averageAgeOfUsers(req, res) {
  try {
    const averageAge = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: '$age' }
        }
      }
    ]);

    if (averageAge.length > 0) {
      res.json({ averageAge: averageAge[0].averageAge });
    } else {
      res.json({ averageAge: 0 });
    }
  } catch (error) {
    console.error('Error calculating average age:', error.message);
    res.status(500).json({ error: 'Error calculating average age' });
  }
}


app.get('/average-age', averageAgeOfUsers);

// function addUserWithValidation(req, res) {
//   const { username, email } = req.body;
//   const newUser = new User({ username, email });
//   newUser.save()
//     .then(() => {
//       res.json({ message: 'User successfully added', user: newUser });
//     })
//     .catch(error => {
//       res.status(400).json({ error: error.message });
//     });
// }
// app.use(express.json());
// app.post('/users', addUserWithValidation);

// async function getAllUsers(req, res) {
//   try {
    
//     const users = await User.find({});

//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error.message);
//     res.status(500).json({ error: 'Error fetching users' });
//   }
// }
// app.get('/users', getAllUsers);

// app.post('/users', async (req, res) => {
//   try {
//     const newUser = new User(req.body);
//     await newUser.save();
//     res.status(201).json({ message: 'User successfully added', user: newUser });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to add user', message: error.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
