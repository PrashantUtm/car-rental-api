const express = require('express');
const router = express.Router();

const  { 
    getMockedBookings,
    createMockedBooking,
    updateMockedBooking
} = require('../controllers/bookings.js');

router.get('/', getMockedBookings);
router.post('/', createMockedBooking);
router.put('/:id', updateMockedBooking);

module.exports = router;