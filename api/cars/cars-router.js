const express = require('express')
const Car = require('./cars-model')
const router = express.Router()

router.get('/', async (req, res, next) =>{
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err){
        next(err)
    }
})

router.get('/:id', async (req, res, next) =>{
// [GET] /api/cars/:id returns a car by the given id.
res.json(` gets car with id of ${req.params.id}`)
})

router.post('/', async (req, res, next) =>{
// [POST] /api/cars returns the created car.
res.json('posts new car')
})


module.exports = router