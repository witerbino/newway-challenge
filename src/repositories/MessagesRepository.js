const Message = require('../models/Message');

class MessagesRepository {
  constructor() {
    this.model = Message;
  }

  async sendMessage({ from, target_id, media, message }) {
    return await this.model.create({
      from,
      target_id,
      media,
      message
    });
  }

  async findAllMessages(query = {}) {
    return await this.model.findAll(query);
  }
}

module.exports = MessagesRepository;