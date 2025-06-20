const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    des : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    }

})

const product = mongoose.model('product',productSchema)

module.exports = product;