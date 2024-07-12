const cars = require('../data/cars.js');
const users = require('../data/users.js');

const getMockedUsers = ((req, res) => {
    return res.status(200).json(users);
});

const createMockedUser = ((req, res) => {
    const newUser = req.body;
    users.push(newUser)
    res.status(201).json(newUser)
});

const getMockedUser = ((req, res) => {
    const username = String(req.params.username);
    const user = users.find(user => user.username == username);
    if (!user) {
        return res.status(204).send('User not found');
    }
    res.json(user);
});

const getMockedCars = ((req, res) => {
    return res.status(200).json(cars.map(car => ({ 
        plateNumber: car.plateNumber, 
        make: car.make,
        model: car.model,
        dailyRate: car.dailyRate,
        photo: car.photo
    })));
});

const getMockedCar = ((req, res) => {
    const plateNumber = String(req.params.plateNumber);
    const car = cars.find(car => car.plateNumber == plateNumber);
    if (!car) {
        return res.status(404).send('Car not found');
    }
    res.json(car);
});

const createMockedCar = ((req, res) => {
    const newCar = req.body;
    cars.push(newCar)
    res.status(201).json(newCar)
});

const updateMockedCar = ((req, res) => {
    const plateNumber = req.params.plateNumber;
    const index = cars.findIndex(car => car.plateNumber === plateNumber)
    if (index >= 0) {
        cars[index] = req.body;
        res.status(200).send(cars[index])
    } else {
        res.status(204).send('Car not found')
    }
});

module.exports = {
    getMockedCars,
    getMockedCar,
    createMockedCar,
    updateMockedCar,
    getMockedUsers,
    getMockedUser,
    createMockedUser
}