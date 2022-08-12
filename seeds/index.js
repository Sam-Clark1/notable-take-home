const seedDoctor = require('./doctor-seed');
const seedAppointment = require('./appointment-seed');
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedDoctor();
    console.log('\n--- Test Seed Done --- \n')
    await seedAppointment();
    console.log('\n--- Test Seed Done --- \n')
    process.exit(0);
  };
  
  seedAll();