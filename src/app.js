const cors = require('cors');
const express = require('express');

const routers = require('./routers');

class App {
  constructor() {
    this.app = express();
  }

  init() {
    this.setMiddlewares();
    this.setRouters();
    return this.app;
  }

  setMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  setRouters() {
    this.app.use('/api', routers);
  }
}

module.exports = App;