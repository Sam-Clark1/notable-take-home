const {Appointment} = require('../models');

Data = [
    {
        patientFirstName: 'Joe',
        patientLastName: 'Smith',
        date: '2022-09-01',
        time: '10:30 AM',
        kind: 'New Patient',
        doctor_id: 1
    }
]

const seedAppointment = () => Appointment.bulkCreate(Data);

module.exports = seedAppointment;