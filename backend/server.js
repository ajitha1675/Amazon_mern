const app = require('./app');
const dotenv = require("dotenv");
const connectDatabase = require('./config/database');

dotenv.config({path:"config/.env"});

connectDatabase();

app.listen(process.env.PORT, ()=>{
  console.log(`Server listening to the port ${process.env.PORT} in ${process.env.NODE_ENV}`); 
})