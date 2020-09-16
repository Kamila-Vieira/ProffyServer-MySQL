module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define(
    "Class",
    {
      subject: DataTypes.STRING,
      cost: DataTypes.DECIMAL,
      user_id: DataTypes.INTEGER,
    },
  );

  return Class;
};