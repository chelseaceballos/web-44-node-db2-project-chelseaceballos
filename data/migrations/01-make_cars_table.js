exports.up = function (knex) {
  return knex.schema.table('cars', tbl => {
    tbl.increments()

    tbl.string('vin', 17).unique().notNullable()   
    tbl.string('make', 128).notNullable()
    tbl.string('model', 128).notNullable()
    tbl.numeric('mileage').unsigned().notNullable() // cannot be negative number
    tbl.string('title', 128)
    tbl.string('transmission', 128)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');
};
