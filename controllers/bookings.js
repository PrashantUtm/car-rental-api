const bookings = require("../data/bookings.js");
const crypto = require("crypto");

const getMockedBookings = ((req, res) => {
    const username = req.username;
    const userBookings = bookings.filter(b => b.customerId === username);
    return res.status(200).json(userBookings);
});

const createMockedBooking = ((req, res) => {
    const newBooking = req.body;
    newBooking.id = crypto.randomBytes(16).toString("hex");
    bookings.push(newBooking)
    res.status(201).json(newBooking)
});

const updateMockedBooking = ((req, res) => {
    const bookingId = req.params.id;
    console.log('bookingId', bookingId);
    const index = bookings.findIndex(booking => booking.id === bookingId)
    if (index >= 0) {
        bookings[index] = req.body;
        res.status(200).send(bookings[index])
    } else {
        res.status(404).send('Booking not found')
    }
});

module.exports = {
    getMockedBookings,
    createMockedBooking,
    updateMockedBooking
}