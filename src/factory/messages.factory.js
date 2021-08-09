const { MessagesRepository } = require('../repositories');
const { FindAllMessagesController, SendMessageController } = require('../controllers');

const repository = new MessagesRepository();

function factorySendMessageController() {
  return new SendMessageController(repository);
}

function factoryFindAllMessagesController() {
  return new FindAllMessagesController(repository);
}

module.exports = {
  factorySendMessageController,
  factoryFindAllMessagesController
};