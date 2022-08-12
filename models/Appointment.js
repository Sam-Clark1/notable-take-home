const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Doctor = require('./Doctor');

class Appointment extends Model{};

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        patientFirstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        patientLastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(1[012]|[1-9])[:][0,1,3,4][05](\s*[AaPp]\.?[Mm]\.?)?$/
            }
        },
        kind: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'doctor',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment'
    }
);

module.exports = Appointment;