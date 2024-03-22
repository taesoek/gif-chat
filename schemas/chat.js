const mongoose = require('mongoose');

const { Schema } = monggose;
const { Types: { ObjectId} } = Schema;
const chatSchema = new Schema({
    roon: {
        type: ObjectId,
        required: true,
        ref: 'Room',
    },
    user: {
        type: String,
        required: true,
    },
    chat: String,
    gif: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

 module.exports = mongoose.model('Chat', chatSchema);