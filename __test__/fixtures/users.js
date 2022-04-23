const getUser = (overrides = {}) => {
  const user = {
    email: 'kz@mz.com',
    password: '12345',
  };

  return Object.assign(user, overrides);
};

module.exports = {
  getUser,
};
