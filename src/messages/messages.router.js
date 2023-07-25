const express = require("express");
const {
  getAdminMessage,
  getProtectedMessage,
  getPublicMessage,
} = require("./messages.service");

const messagesRouter = express.Router();

messagesRouter.get("/public", (req, res) => {
  const message = getPublicMessage();

  res.status(200).json(message);
});

messagesRouter.get("/protected", (req, res) => {
  const message = getProtectedMessage();

  res.status(200).json(message);
});

messagesRouter.get("/admin", (req, res) => {
  const message = getAdminMessage();

  res.status(200).json(message);
});

module.exports = { messagesRouter };
