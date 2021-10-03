const mongoose =  require('mongoose')
//schema creation
const beverageSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true,
    },
    beverages: {
        type : String,
        required :true,
    },
    points:{
        type: String,
        required :true
    }
})

//we will create new collection using model

const Drink = new mongoose.model('Drink', beverageSchema);

module.exports = Drink;


