const cars = [
    {        
        vin: 'JH4DC4440RS004255',
        make: 'Nissan',
        model: "Sentra",
        mileage: 243432,
        title: 'salvage',
        transmission: 'automatic'
    },
    {       
        vin: 'JTDBF32K920050115',
        make: 'Nissan',
        model: "Altima",
        mileage: 33393,
        title: 'clean',
        
    },
    {       
        vin: '5FNRL38209B014050',
        make: 'Nissan',
        model: "Maxima",
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