const mongoose  = require("mongoose");
module.exports.db=()=>{
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((connect)=>{
        console.log("database connected")
    }).catch(err=>console.log(err))
}

