const bcrypt = require('bcrypt');

module.exports = {
  login: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body

    const user = await db.check_user(username)

    if (!user[0]) {
      return res.status(404).send("You must be new here.")
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password)
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          username: user[0].username,
          profile_pic: user[0].profile_pic
        }
        res.status(200).send(req.session.user)
      } else {
        res.status(403).send('Username or password incorrect')
      }
    }
  },

  register: async (req, res) => {
    const db = req.app.get('db');
    const { username, password } = req.body

    // Hey! I know you!
    const existingUser = await db.check_user(username)
    if (existingUser[0]) {
      return res.status(409).send('User already exists')
    }

    // You must be new here.
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = await db.register_user([username, hash, `https://robohash.org/${hash}.png`])
    req.session.user = {
      userId: newUser[0].id,
      username: newUser[0].username,
      profile_pic: newUser[0].profile_pic
    }
    res.status(200).send(req.session.user)
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }

}