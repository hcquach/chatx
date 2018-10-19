// Calling mongoose helper to build the schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Simple message schema with user and content as strings
const MessageSchema = new Schema({
  user: { type: String },
  content: { type: String }
});

// Passing the schema to Mongoose model
mongoose.model('message', MessageSchema);