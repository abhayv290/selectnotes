const connnectToMongo = require('./db')
const express = require('express')
const cors = require('cors');
require('dotenv').config();

(async () => {
  try {
    connnectToMongo();

  } catch (err) {
    console.log(err + 'unable to connect to the mongoDB')
  }
})();

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
//Available Routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})