const path = require('path');

const directoryPath = path.join(__dirname, '..', '..' , 'models');
const db = require(directoryPath);
// Add Databases
const Tasks = db.tasks;

// For Complex Requests
const { Op } = require("sequelize");

export const getTasks = async (req, res) => {
    let tasks = await Tasks.findAll()
    console.log('aa')
    res.json(tasks)
}

export const getTask = async (req, res) => {
    let task = await Tasks.findOne({
        where: {
            id: req.params.id
        }
    })
    res.json(task)
}

export const getTaskCount = async (req, res) => {
    let tasks = await Tasks.findAndCountAll()
    let count = tasks.count
    res.json(count)
}

export const createTask = async (req, res) => {
    let result = await Tasks.create({
        title: req.body.title,
        desc: req.body.desc
    })
    res.json(result)
}

export const deleteTask = async (req, res) => {
    let task = await Tasks.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(task)
}

export const updateTask = async (req, res) => {
    let task = await Tasks.update({
        title: req.body.title,
        desc: req.body.desc
    }, {
        where: {
            id: req.params.id
        }
    })
    res.json(task)
}