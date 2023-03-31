const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true, // <--- This will automatically add createdAt and updatedAt fields to the model
  }
);

module.exports = mongoose.model('User', userSchema);

/* 
- Every goal needs to know what user it belongs to. This is why user is brought in as a parameter to reference it. 

*/
