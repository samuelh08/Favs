exports.create = (req, res) => {
  const { body = {} } = req;
  res.json({
    data: body,
  });
};

exports.list = (req, res) => {
  res.json([]);
};

exports.read = (req, res) => {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};

exports.delete = (req, res) => {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};
