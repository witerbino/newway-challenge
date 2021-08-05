const cors = require('cors');
const express = require('express');

class App {
  constructor() {
    this.app = express();
  }

  init() {
    this.setMiddlewares();
    return this.app;
  }

  setMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}

module.exports = App;