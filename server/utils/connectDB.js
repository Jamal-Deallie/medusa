const mongoose = require("mongoose")
const dotenv = require('dotenv');



const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection successful!');
  })
  .catch(() => error => console.log(error.message));

