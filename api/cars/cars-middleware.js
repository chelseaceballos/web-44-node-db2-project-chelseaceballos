const Car = require('./cars-model');

const checkCarId = async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    if (!car) {
      next({status: 404, message: `car with id ${req.params.id} is not found` })
    } else {
      req.car = car
      next()
    }
} catch (err){
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  // checkCarPayload returns a status 400 with a { message: "<field name> is missing" } if any required field is missing.
 next()
}

const checkVinNumberValid = (req, res, next) => {
  //checkVinNumberValid returns a status 400 with a { message: "vin <vin number> is invalid" } if the vin number is invalid.
 next()
}

const checkVinNumberUnique = (req, res, next) => {
  // checkVinNumberUnique returns a status 400 with a { message: "vin <vin number> already exists" } if the vin number already exists in the database.
 next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}