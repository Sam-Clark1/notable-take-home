const Doctor = require('./Doctor');
const Appointment = require('./Appointment');

Appointment.belongsTo(Doctor, {
    foreignKey: 'appointment_id'
});

Doctor.hasMany(Appointment, {
    foreignKey: 'doctor_id'
});

module.exports = {
    Doctor,
    Appointment
}