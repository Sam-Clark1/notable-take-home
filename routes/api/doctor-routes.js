const router = require('express').Router();
const {Doctor, Appointment} = require('../../models');

// Find All doctors with all their appointments
router.get('/', (req, res) => {
  Doctor.findAll({
      include: [
        {
          model: Appointment,
          attributes: [
            'id',
            'patientFirstName',
            'patientLastName',
            'date',
            'time',
            'kind'
          ]
        }
      ]
  })
  .then(dbDoctorData => res.json(dbDoctorData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create doctor
router.post('/', (req, res) => {
  Doctor.create(req.body)
  .then(dbDoctorData => res.json(dbDoctorData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});


module.exports = router;