const mongoose= require('mongoose')

const url =process.env.MONGO_URL;
 
mongoose.connect(url).then(()=>{
    console.log("mongodb connected....!");
})
.catch((err)=>{
    console.log("mogodb is not connected", err);
})