const checkEmptyBody = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: "O body da requisição não pode ser vazio." });
  }
  next();
};

module.exports = checkEmptyBody;
