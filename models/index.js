const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

// Ruta a tu base de datos SQLite (modificá si es otra)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../data/starbucks.db')
});

const StarbucksStore = require('./StarbucksStore')(sequelize, DataTypes);

module.exports = {
  sequelize,
  Sequelize,
  StarbucksStore
};