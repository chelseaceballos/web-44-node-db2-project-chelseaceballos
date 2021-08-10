const cars = [
    {
        vin: '12345678',
        make: 'Nissan',
        model: "Sentra",
        mileage: 243432,
        title: 'salvage',
        transmission: 'automatic'
    },
    {
        vin: '09989899',
        make: 'Nissan',
        model: "Altima",
        mileage: 33393,
        title: 'clean',
        
    },
    {
        vin: '77888777',
        make: 'Nissan',
        model: "Frontier",
        mileage: 22000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(()=> {
//     return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}