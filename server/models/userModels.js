const mongoose = require('mongoose');
const dotenv = require("dotenv");
let mystr = "mongodb+srv://sally27:S789897978s@cluster0.mrpu0.mongodb.net/projectData?retryWrites=true&w=majority"
// process.env.MONGO_URL
dotenv.config()
mongoose.connect(mystr, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
//-----------------------------------------
//  Defining schema for a user
const usersSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: false
    },
    nickname: {
        type: String,
        min: 3,
        max: 10,
        required: true
    },

    username: {
        type: String,
        required: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },

    proCategory: {
        type: String,
        default: ""
    },
    userInfo: {
        type: String,
        default: ""
    },
    posts: Array,
    myTips: Array
},
    { timestamps: true }
);

// create Model from the schema we created above
module.exports.user = mongoose.model('user', usersSchema);
