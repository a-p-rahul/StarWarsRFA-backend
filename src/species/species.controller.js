const { getSpecies, getASpecies } = require('./species.service');

const get = async function(req, res) {
  const species = await getASpecies(req.params._id);
  if (!species) { // is falsy
    res.sendStatus(404)
  } else {
    res.send(species);
  }
}

const getAll = async function(req, res) {
  res.send(await getSpecies());
}

module.exports = {
  get,
  getAll
};
