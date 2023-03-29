const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel'); // <--- This is the model; now we can use it in the routes

// @description: Get goals
// @route: GET /api/goals
// @access: Public
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({}); // gets all goals
  // res.status(200).json({ message: 'GET goals' });
  res.status(200).json(goals); // sends all goals to the frontend (in JSON format)
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
  const goal = await Goal.create({
    text: req.body.text,
  });
  // res.status(200).json({ message: 'SET goals' });
  res.status(200).json(goal);
});

// @description: Update all goals
// @route: PUT /api/goals/:id
// @access: Private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // res.json({ message: `Update Goal ${req.params.id}` });
  res.status(200).json(updatedGoal);
});

// @description: Get all goals
// @route: DELETE /api/goals/:id
// @access: Private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }
  // just remove/delete the goal and return the id
  await Goal.deleteOne();
  // res.json({ message: `Delete Goal ${req.params.id}` });
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
};
