const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    // since every goal, we have to know which user created the goal. Every goal will be associated with a user:
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // reference to the User model
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
