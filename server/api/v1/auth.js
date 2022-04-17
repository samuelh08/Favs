const { sign, verify } = require('jsonwebtoken');

const {
  token: { secret, expires },
} = require('../../config');

const signToken = (payload, expiresIn = expires) =>
  sign(payload, secret, {
    expiresIn,
  });

const auth = async (req, res, next) => {
  let { headers: { authorization: token = '' } = {} } = req;

  if (token.startsWith('Bearer')) {
    token = token.substring(7);
  }
  if (!token) {
    return next({
      message: 'Unauthorized',
      statusCode: 401,
    });
  }
  verify(token, secret, (err, decoded) => {
    if (err) {
      next({
        message: 'Unauthorized',
        statusCode: 401,
      });
    } else {
      req.decoded = decoded;
      next();
    }
  });
};

module.exports = {
  signToken,
  auth,
};
