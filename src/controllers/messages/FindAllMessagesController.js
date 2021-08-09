class FindAllMessagesController {
  constructor(repository) {
    this.repository = repository;
  }

  async handle(req, res) {
    const messages = await this.repository.findAllMessages();
    return res
      .json({
        data: messages
      });
  }
}

module.exports = FindAllMessagesController;