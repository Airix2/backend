const path = require('path');

const directoryPath = path.join(__dirname, '..', '..' , 'models');
const db = require(directoryPath);
// Add Databases
const Cars = db.cars;

// For Complex Requests
const { Op, fn, col } = require("sequelize");

export const getCars = async (req, res) => {
    let cars = await Cars.findAll()
    res.json(cars)
}
export const getMakes = async (req, res) => {
    //let answer = await Cars.aggregate('makes', 'DISTINCT', { plain: false })
    let answer = await Cars.findAll({
        attributes: [
            // specify an array where the first element is the SQL function and the second is the alias
            [fn('DISTINCT', col('make')) ,'make'],
        ]})
    res.json(answer)
}

export const getCar = async (req, res) => {
    let car = await Cars.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json(car)
}

export const getCarCount = async (req, res) => {
    let cars = await Cars.findAndCountAll()
    let count = cars.count
    res.json(count)
}

export const createCar = async (req, res) => {
    let result = await Cars.create({
        title: req.body.title,
        desc: req.body.desc
    })
    res.json(result)
}

export const deleteCar = async (req, res) => {
    let car = await Cars.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(car)
}

export const updateCar = async (req, res) => {
    let car = await Cars.update({
        title: req.body.title,
        desc: req.body.desc
    }, {
        where: {
            id: req.params.id
        }
    })
    res.json(car)
}