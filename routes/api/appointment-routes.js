const router = require('express').Router();
const {Doctor, Appointment} = require('../../models');
const {Op} = require('sequelize');
const { throws } = require('assert');

// Get appointment by id and date. Use ?iD=(id)&Date=(date) in url to work.
router.get('/', (req, res) => {
    let {iD, Date} = req.query

    Appointment.findAll({
        where: {
            [Op.and]: [
                { id: iD },
                { date: Date }
            ]
        }  
    })
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post('/', async (req, res) => {
//     await Appointment.findAll({
//         where: {
//             [Op.and]: [
//                 { doctor_id: req.body.doctor_id },
//                 { date: req.body.date }
//             ]
//         }
//     }).then(dbDoctorData => {
//     console.log(dbDoctorData)
//     if(!dbDoctorData.length >= 3) {
        
//     Appointment.create(req.body)
//     .then((appointment) => res.status(200).json(appointment))
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
//     } else {
//     res.status(500).json("Too Many Appointments at that time")
//     }
//     })
// });

// Create appointment
router.post('/', (req, res) => {
    Appointment.create(req.body)
    .then(dbAppointmentData => res.json(dbAppointmentData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

// Delete appointment by id
router.delete('/:id', (req, res) => {
    Appointment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbAppointmentData => {
        if (!dbAppointmentData) {
          res.status(404).json({ message: 'No appointment found with this id' });
          return;
        }
        res.json(dbAppointmentData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;