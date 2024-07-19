const express = require('express');
const router = express.Router();

const  { 
    getMockedBookings,
    createMockedBooking,
    updateMockedBooking
} = require('../controllers/bookings.js');

router.get('/bookings/', getMockedBookings);
router.post('/bookings/', createMockedBooking);
router.put('/bookings/:plateNumber', updateMockedBooking);

module.exports = router;