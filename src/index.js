const { app } = require('./app');
const axios = require("axios");
const { port, downstream } = require('./config');

axios.defaults.baseURL = downstream;

// starting the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
