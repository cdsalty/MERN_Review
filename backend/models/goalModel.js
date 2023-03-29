const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text field for your goal'],
    },
  },
  {
    // create an updated and created at field
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
