
const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect('mong}odb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
// mongoose.set('useFindAndModify', false);
// const mongoose = require('mongoose')
console.log(process.env.MONGODB_PASSCODE);
mongoose.connect(`mongodb+srv://crud-mongo-2021:${process.env.MONGODB_PASSCODE}@crud-1.1tcim.mongodb.net/product?retryWrites=true&w=majority`, {
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