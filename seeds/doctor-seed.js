const {Doctor} = require('../models');

const Data = [
    {
        firstName: 'Brian',
        lastName: 'Smith'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe'
    },
    {
        firstName: 'Bob',
        lastName: 'Roberts'
    },
];

const seedDoctor = () => Doctor.bulkCreate(Data);

module.exports = seedDoctor;