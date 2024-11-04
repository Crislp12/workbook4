console.log('hi');
require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
  {
    username: 'Sanji',
    title: 'post1',
  },
  {
    username: 'Zoro',
    title: 'post2',
  },
];

app.get('/post', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  console.log(username);
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendSatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
    if(err) return res.sendSatus(403);
    req.user = user
    next()
  })
}

// app.get('/post', (req, res) => {});

app.listen(3000);
