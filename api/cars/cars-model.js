const db = require('../../data/db-config')

const getAll = () => {
return db('cars')
}

const getById = async (id) => {
  
}

const create = () => {
  // create resolves to the newly created car record
}


module.exports = {
  getAll,
  getById,
  create,
}