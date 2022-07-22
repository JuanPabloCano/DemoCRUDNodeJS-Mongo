const { Router } = require('express');
const router = Router();
const { getUsers, getUserById, createUser, updateUserById, deleteUser } = require('../services/user.service')

router.get('/user', getUsers);
router.get('/user/:id', getUserById);

router.post('/user', createUser);
router.put('/user/:id', updateUserById);
router.delete('/user/:id', deleteUser);


module.exports = router;