require('dotenv').config();

const App = require('./src/app');
const server = new App().init();

server.listen(process.env.APP_PORT, () => {
  console.log(`App started in port ${process.env.APP_PORT}`);
});