const express = require('express');
const router = express.Router();

const  { 
    getMockedCars,
    getMockedCar,
    createMockedCar,
    updateMockedCar,
    getMockedUsers,
    getMockedUser,
    createMockedUser
} = require('../controllers/mocks.js');

router.get('/cars/', getMockedCars);
router.get('/cars/:plateNumber', getMockedCar);
router.post('/cars/', createMockedCar);
router.put('/cars/:plateNumber', updateMockedCar);
router.get('/users/', getMockedUsers);
router.get('/users/:username', getMockedUser);
router.post('/users/', createMockedUser);

module.exports = router;