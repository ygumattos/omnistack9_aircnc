const mongoose = require('mongoose');

// String, Number, Boolean, etc etc
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);