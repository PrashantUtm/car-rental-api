const jwt = require('jsonwebtoken');
const users = require('../data/users.js');
const jwtSecret = '6b49b1141686633a0884ca3688723e6758461c0c17b9e57490586dd7ec5817df699310';

const login = async (req, res, next) => {
    const { username, password } = req.body
    // Check if username provided
    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password required",
        })
    }
    try {
        const user = users.find(u => u.username === username)
        
        if (!user ||  password !== `${username}1!`) {
        res.status(400).json({
            error: "Incorrect credentials",
        })
        } else {
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
                { id: username },
                jwtSecret,
                {
                    expiresIn: maxAge, // 3hrs in sec
                }
            );
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge * 1000, // 3hrs in ms
            });
            res.status(201).json({
                username: user.username,
                token: token
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const auth = (req, res, next) => {
    const token = req.headers.auth
    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ error: "Not authorized" })
        } else {
          if (decodedToken) {
            req.username = decodedToken.id;
            next()
          }
        }
      })
    } else {
      return res
        .status(401)
        .json({ error: "Not authorized, token not available" })
    }
  }

module.exports = {
    login,
    auth
};