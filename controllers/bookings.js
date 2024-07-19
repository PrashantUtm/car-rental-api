const bookings = [];

const getMockedBookings = ((req, res) => {
    return res.status(200).json(bookings);
});

const createMockedBooking = ((req, res) => {
    console.log('create');
    const newBooking = req.body;
    bookings.push(newBooking)
    res.status(201).json(newBooking)
});

const updateMockedBooking = ((req, res) => {
    const bookingId = req.params.bookingId;
    const index = bookings.findIndex(booking => booking.id === bookingId)
    if (index >= 0) {
        bookings[index] = req.body;
        res.status(200).send(bookings[index])
    } else {
        res.status(204).send('Booking not found')
    }
});

module.exports = {
    getMockedBookings,
    createMockedBooking,
    updateMockedBooking
}