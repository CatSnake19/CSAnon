const messagesRouter = require('express').Router();
const messagesController = require('./controller/messagesController');

messagesRouter.get('/all', messagesController.getAll, (req, res) => {
  const messages = res.locals.messages;
  res.status(200).json(messages);
});

module.exports = messagesRouter;
