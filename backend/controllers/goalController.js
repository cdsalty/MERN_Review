const asyncHandler = require('express-async-handler');

// @description: Get goals
// @route: GET /api/goals
// @access: Public
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'GET goals' });
});

// @description: Set goals
// @route: POST /api/goals
// @access: Public
const setGoal = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field for your goal');
  }
  res.status(200).json({ message: 'SET goals' });
});

// @description: Update all goals
// @route: PUT /api/goals/:id
// @access: Private
const updateGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

// @description: Get all goals
// @route: DELETE /api/goals/:id
// @access: Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
};
