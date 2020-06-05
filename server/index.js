require('dotenv').config()
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controller');
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env
const app = express();

// middlware
app.use(express.json());

// session
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET
  })
)

// endpoints - users
app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)
app.post('/api/auth/logout', ctrl.logout)

// endpoints - posts
app.get('/api/posts/:userid')
app.get('/api/post/:postid')
app.post('/api/post/:userid')

// database connection - massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db)
  console.log('Welcome to the DB! You have been connected.')
  app.listen(SERVER_PORT, () => console.log(`I will be taking requests on port ${SERVER_PORT}`))
}).catch(err => console.log(err))
