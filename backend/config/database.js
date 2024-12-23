const mongoose = require('mongoose');

const connectDatabase = ()=>{
  mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(con=>{
    console.log(`MangoDB is connected to the host: ${conn.connection.host }`); 
  }).catch(()=>{
    // console.log(error);
    
  })
}

module.exports = connectDatabase;