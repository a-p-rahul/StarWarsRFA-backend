const { getPlanets, getPlanet } = require('./planets.service');

const get = async function(req, res) {
  const planet = await getPlanet(req.params._id);
  if (!planet) { // is falsy
    res.sendStatus(404)
  } else {
    res.send(planet);
  }
}

const getAll = async function(req, res) {
  res.send(await getPlanets());
}

module.exports = {
  get,
  getAll
};
