const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.DATABASE,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect