const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
var jwt = require('jsonwebtoken');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '192.168.8.139',
    user : 'postgres',
    password : 'dupadupa',
    database : 'Fetish'
  }
});

app.use(cors());

app.get('/user/:user/password/:password', (req, res) => {
	knex.select('AAA').from('g.Notifications').then(data=>{
	});

	var token = jwt.sign({ user: req.params.user, password: req.params.password }, 'DamianRatajczak');

	res.send(token)
})

app.get('/likes', (req, res) => {
	knex.select('AAA').from('g.Notifications').then((data=>{
		console.log(data)
		res.send(JSON.stringify(data))
	}));
	
})

app.get('/login', (req, res) => {
	knex.select('AAA').from('g.Notifications').then((data=>{
		console.log(data)
		res.send(JSON.stringify(data))
	}));
	
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))