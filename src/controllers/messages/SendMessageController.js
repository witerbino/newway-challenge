class SendMessageController {
  constructor(repository) {
    this.repository = repository;
  }

  async handle(req, res) {
    await this.repository.sendMessage(req.body);
    return res.json({ data });
  }
}

module.exports = SendMessageController;