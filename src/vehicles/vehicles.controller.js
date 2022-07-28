const { getVehicles, getVehicle } = require('./vehicles.service');

const get = async function(req, res) {
  const species = await getVehicle(req.params._id);
  if (!species) { // is falsy
    res.sendStatus(404)
  } else {
    res.send(species);
  }
}

const getAll = async function(req, res) {
  res.send(await getVehicles());
}

module.exports = {
  get,
  getAll
};
