module.exports = (sequelize, DataTypes) => {
    const Connection = sequelize.define(
      "Connection",
      {
        user_id: DataTypes.INTEGER
      },
    );
  
    return Connection;
  };