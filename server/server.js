const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');

const app = express();

// Connect database
connectDB();

app.use(express.json({ extended: false }));

app.use(passport.initialize());

require('./config/passport')(passport);

app.use('/api/users', require('./routes/api/users'));

app.get('/', (req, res) => res.send('API Running'));

// app.use('/api/users/register', require('./routes/api/register'));
// app.use('/api/users/login', require('./routes/api/login'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
