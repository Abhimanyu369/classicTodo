const User = require('../models/user');

exports.userLogin = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ where: { username: username, password: password } }).then(
    (user) => {
      if (!user) {
        return res.status(200).json({ error: 'User not Found!' });
      }
      return res.status(200).json(user);
    },
  );
};
