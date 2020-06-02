// User model here

const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter email"],
    },
    passwordHash: {
      type: String,
      required: true
    } 
  },
  {
    timestamps: true
  }
);

const userModel = model('User', userSchema);

userSchema.index({ 'email': 1}, {unique: true});
// userSchema.index({ 'username': 1}, {unique: true});

module.exports = userModel