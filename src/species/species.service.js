const axios = require("axios");
const { host, port, downstream } = require('../config');


async function getSpecies() {
  try {
    const species = await axios.get('/species');
    var speciesRes = JSON.stringify(species.data.results);
    return speciesRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return []; // the list is empty
  }
}

async function getASpecies(id) {
  try {
    const species = await axios.get(`/species/${id}`);
    var speciesRes = JSON.stringify(species.data);
    return speciesRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return null;
  }
}

module.exports = {
  getSpecies,
  getASpecies,
};



