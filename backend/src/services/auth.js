const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");

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
      const payload = {
        sub: req.user.id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3H",
      });
      res.json({
        token,
        is_admin: req.user.is_admin,
      });
    } else {
      res.sendStatus(401);
    }
  });
};
const verifyToken = (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (authorization == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization type is not 'Bearer'");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
