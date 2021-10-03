const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost:27017/beverage')
.then(() => {
    console.log('connection is successfull');
}).catch((e) =>{
    console.log('no connection');
})

