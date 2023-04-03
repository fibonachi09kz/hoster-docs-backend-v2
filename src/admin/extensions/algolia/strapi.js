const axios = require('axios');

const strapi = axios.create({
  baseURL: 'http://localhost:1338/api',
});

module.exports = strapi;