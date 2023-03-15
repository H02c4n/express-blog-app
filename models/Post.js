const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Please provide title'],
        trim:true,
        maxLength:[100, 'Title can not be more than 100 characters']
    }
})