function calcularSemiHemisferio(lat, lon) {
  const ns = lat >= 0 ? "Norte" : "Sur";
  const ew = lon >= 0 ? "Este" : "Oeste";
  return ns + " " + ew;
}

module.exports = { calcularSemiHemisferio };
