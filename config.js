require('dotenv').config();

module.exports = {
  DEBUG: process.env.DEBUG,
  API_URL: process.env.API_URL,
  SOCKETS_URL: process.env.SOCKETS_URL,
}
