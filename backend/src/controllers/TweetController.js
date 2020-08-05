const Tweet = require("../models/Tweet");

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort("-createdAt"); // opção - inverte a ordenação

    return res.json(tweets);
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body);

    // avisa os usuarios conectados que um novo tweet foi criado
    req.io.emit("tweet", tweet);

    return res.json(tweet);
  },
};
