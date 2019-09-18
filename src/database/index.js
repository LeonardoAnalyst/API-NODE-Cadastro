const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ROOT:ROOT@cluster0-84qfi.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;