const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoals,
  deleteGoals,
} = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').delete(deleteGoals).put(updateGoals);

// router.get('/', getGoals); // the functionality is in the controller.
// router.post('/', setGoal); // the functionality is in the controller.
// router.put('/:id', updateGoals);
// router.delete('/:id', deleteGoals);

module.exports = router;

/*
The routes all have /api/goals prepended to it.

// router.get('/', (req, res) => {
//   res.json({ message: 'get goals' });
// });
router.get('/', getGoals); // the functionality is in the controller.

// CREATE A GOAL
router.post('/', (req, res) => {
  res.json({ message: 'Set Goal' });
});

// UPDATE A GOAL
router.put('/:id', (req, res) => {
  res.json({ message: `Update Goal ${req.params.id}` });
});

// DELETE A GOAL
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete Goal ${req.params.id}` });
});


Step 3:
const express = require('express');
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require('../controllers/goalController');

// router.get('/', (req, res) => {
//   res.json({ message: 'get goals' });
// });
router.get('/', getGoals); // the functionality is in the controller.

// CREATE A GOAL
// router.post('/', (req, res) => {
//   res.json({ message: 'Set Goal' });
// });
router.post('/', setGoals); // the functionality is in the controller.

// UPDATE  GOAL
// router.put('/:id', (req, res) => {
//   res.json({ message: `Update Goal ${req.params.id}` });
// });
router.put('/:id', updateGoals);

// DELETE A GOAL
// router.delete('/:id', (req, res) => {
//   res.json({ message: `Delete Goal ${req.params.id}` });
// });
router.delete('/:id', deleteGoals);

module.exports = router;


Part 4: Make it cleaner!
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoals).delete(deleteGoals);

// router.get('/', getGoals); // the functionality is in the controller.
// router.post('/', setGoal); // the functionality is in the controller.
// router.put('/:id', updateGoals);
// router.delete('/:id', deleteGoals);
*/
