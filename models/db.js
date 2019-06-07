var mongoose = require('mongoose');
require('./user.model.js');

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true }, (err) => {
    if(!err){
        console.log('MongoDB connection successful');
    }

    else{
        console.log('Error in mongoDB connection' + JSON.stringify(err,undefined,2));
    }
});