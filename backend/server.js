const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const depenseRoutes = require('./routes/depenses');

app.use('/api/auth', authRoutes);
app.use('/api/depenses', depenseRoutes);

app.get('/', function(req, res) {
  res.send('API Expense Tracker fonctionne !');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log('Serveur démarré sur le port ' + PORT);
});