const axios = require("axios");
const { host, port, downstream } = require('../config');


async function getPlanets() {
  try {
    const planets = await axios.get('/planets');
    var planetsRes = JSON.stringify(planets.data.results);
    return planetsRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return []; // the list is empty
  }
}

async function getPlanet(id) {
  try {
    const planet = await axios.get(`/planets/${id}`);
    var planetRes = JSON.stringify(planet.data);
    return planetRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return null;
  }
}

module.exports = {
  getPlanets,
  getPlanet,
};



