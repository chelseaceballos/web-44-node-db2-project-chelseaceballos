
const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) =>{
// [GET] /api/cars returns an array of cars sorted by id (or an empty array if there aren't any).
res.json('gets all cars')
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