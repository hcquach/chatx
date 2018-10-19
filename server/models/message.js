const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: { type: String },
  content: { type: String }
});

mongoose.model('message', MessageSchema);