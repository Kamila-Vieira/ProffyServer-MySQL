const { User } = require("../models");
const jwt = require('jsonwebtoken');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    const incorrectPassword = await user.checkPassword(password);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!incorrectPassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.json({ 
      user,
      token: user.generateToken()
    });
  }
}

module.exports = new SessionController();