module.exports = (sequelize, DataTypes) => {
  const StarbucksStore = sequelize.define("StarbucksStore", {
    STORE_NUMBER: { type: DataTypes.STRING, primaryKey: true },
    STORE_NAME: DataTypes.STRING,
    STREET_ADDRESS: DataTypes.STRING,
    CITY: DataTypes.STRING,
    PROVINCE: DataTypes.STRING,
    COUNTRY: DataTypes.STRING,
    POSTCODE: DataTypes.STRING,
    LONGITUDE: DataTypes.FLOAT,
    LATITUDE: DataTypes.FLOAT
  }, {
    tableName: "STARBUCKS_DIRECTORY",
    timestamps: false
  });

  return StarbucksStore;
};
