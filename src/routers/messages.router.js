const express = require('express');
const router  = express.Router();

const queryMiddleware = require('../middlewares/query.middleware');

const { 
  factorySendMessageController, 
  factoryFindAllMessagesController 
} = require('../factory/messages.factory');

router.post('/', (req, res) => factorySendMessageController().handle(req, res));
router.get('/', queryMiddleware, (req, res) => factoryFindAllMessagesController().handle(req, res));

module.exports = router;