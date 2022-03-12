
const mongoose = require('mongoose');
const dotenv = require("dotenv");

// dotenv.config()
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected successfully to MongoDB!'))
//     .catch(err => console.error('Something went wrong', err));

const PostSchema = new mongoose.Schema(
    {
        userId: String,

        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],

        },
        Comment: {
            type: Array,
            default: [],
        },
        category: String
    },
    { timestamps: true }
);

module.exports.post = mongoose.model("Post", PostSchema);