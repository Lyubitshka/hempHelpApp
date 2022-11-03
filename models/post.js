const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    branch: String,
    price: Number,
    hashTags: Array,
    image: String,
    author: String
});

module.exports = mongoose.model('Post', PostSchema);