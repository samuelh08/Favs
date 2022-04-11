const mongoose = require('mongoose');

exports.connect = ({
  protocol = 'mongodb',
  url = '',
  username = '',
  password = '',
}) => {
  let dburl = '';

  if (username !== '' && password !== '') {
    dburl = `${protocol}://${username}:${password}@${url}`;
  } else {
    dburl = `${protocol}://${url}`;
  }

  mongoose.connect(dburl);
};

exports.disconnect = () => {
  mongoose.connection.close(() => {});
};

process.on('SIGINT');
