
const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect('mong}odb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
// mongoose.set('useFindAndModify', false);
// const mongoose = require('mongoose')
// console.log(MONGODB_PASSCODE);
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    author: {
        type: String
    }
},
    {
        collection: 'user-data',
        timestamps: true
    });

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;