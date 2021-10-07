require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const app = express();

sequelize
  .sync()
  .then(() => console.log('Database Connected !'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
