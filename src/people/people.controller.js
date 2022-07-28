const { getPeople, getPerson } = require('./people.service');

const get = async function(req, res) {
  const species = await getPerson(req.params._id);
  if (!species) { // is falsy
    res.sendStatus(404)
  } else {
    res.send(species);
  }
}

const getAll = async function(req, res) {
  res.send(await getPeople());
}

module.exports = {
  get,
  getAll
};
