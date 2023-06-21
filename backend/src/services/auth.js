const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,

  memoryCost: 2 ** 16,

  timeCost: 5,

  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2

    .hash(req.body.password, hashingOptions)

    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;

      delete req.body.password;

      next();
    })

    .catch((err) => {
      console.error(err);

      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2.verify(req.user.hashedPassword, req.body.password).then((ok) => {
    if (ok) {
      res.json({ token: "oui, c'est bon" });
    } else {
      res.sendStatus(401);
    }
  });
};
module.exports = {
  hashPassword,
  verifyPassword,
};
