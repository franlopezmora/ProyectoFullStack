const express = require('express');
const router = express.Router();
const db = require('../models');
const countries = require('../data/countries');
const { calcularSemiHemisferio } = require('../utils/geo');

router.get('/', async (req, res) => {
  const { texto, hemisferio } = req.query;
  const where = {};

  if (texto) {
    where.STORE_NAME = { [db.Sequelize.Op.like]: `%${texto}%` };
  }

  let locales = await db.StarbucksStore.findAll({ where, limit: 100 });

  locales = locales.map(store => {
    const semi = calcularSemiHemisferio(store.LATITUDE, store.LONGITUDE);
    return {
      nombre: store.STORE_NAME,
      direccion: store.STREET_ADDRESS,
      ciudad: store.CITY,
      pais: countries[store.COUNTRY] || store.COUNTRY,
      hemisferio: semi
    };
  });

  const filtrados = hemisferio && hemisferio !== "Todos"
    ? locales.filter(l => l.hemisferio === hemisferio)
    : locales;

  res.json(filtrados.slice(0, 15));
});

module.exports = router;
