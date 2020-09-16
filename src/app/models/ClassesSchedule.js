const { timeToMinutes } = require('../utils/convertHourToMinutes')

module.exports = (sequelize, DataTypes) => {
    const ClassesSchedule = sequelize.define(
      "ClassesSchedule",
      {
        week_day: DataTypes.INTEGER,
        from: DataTypes.INTEGER,
        to: DataTypes.INTEGER,
        class_id: DataTypes.INTEGER,
      },
    );
    /* const timeToMinutes = convertHourToMinutes(time);
    ClassesSchedule.from = timeToMinutes;
    ClassesSchedule.to = timeToMinutes; */
    return ClassesSchedule;
  };