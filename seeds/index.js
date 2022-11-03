const mongoose = require('mongoose');

const Post = require('../models/post');

mongoose.connect('mongodb://localhost:27017/hemp-help');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection ERROR'));
db.once('open', () => {
    console.log('MongoDB connected');
});

const seedDb = async() => {
    await Post.deleteMany({});
    const p = new Post({
        title: 'CBD Bakery',
        description: 'Nice',
        branch: 'Food',
        hashTags: ['sweet', 'sour', 'cbd', 'food']});
    await p.save();
}

seedDb();