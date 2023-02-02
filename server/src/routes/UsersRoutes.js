const express = require('express');

const { UsersController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
// router.post('/', UsersController.create);

// READ - get
// Read All
router.get('/', UsersController.getAll);

// // Read One
// router.get('/:id', UsersController.getById);

// // UPDATE - put
// router.put('/:id', UsersController.update);

// // DELETE - delete
// router.delete('/:id', UsersController.remove);

module.exports = router;