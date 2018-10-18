const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String }
});

UserSchema.statics.addMessage = function(id, content) {
  const Message = require('../models/message');

  return this.findById(id)
    .then(user => {
      const message = new Message({ content, user })
      user.message.push(message)
      return Promise.all([message.save(), user.save()])
        .then(([message, user]) => user);
    });
}

mongoose.model('user', UserSchema);