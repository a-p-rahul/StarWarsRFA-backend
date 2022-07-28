const axios = require("axios");
const { host, port, downstream } = require('../config');


async function getPeople() {
  try {
    const people = await axios.get('/people');
    var peopleRes = JSON.stringify(people.data.results);
    return peopleRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return []; // the list is empty
  }
}

async function getPerson(id) {
  try {
    const person = await axios.get(`/people/${id}`);
    var personRes = JSON.stringify(person.data);
    return personRes.replaceAll(downstream, `http://${host}:${port}/`);
  } catch(e) {
    console.log(' +++++++++++++++++++++ ')
    console.log(e);
    console.log(' +++++++++++++++++++++ ')
    return null;
  }
}

module.exports = {
  getPeople,
  getPerson,
};



