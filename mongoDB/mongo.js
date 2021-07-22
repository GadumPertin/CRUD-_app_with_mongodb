const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    author: String
}, { collection: 'user-data' });

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;