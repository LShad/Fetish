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

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.post('/user/:user/password/:password', (req, res) => {
	/*knex.select('AAA').from('g.Notifications').then(data=>{
	});
*/
	var token = jwt.sign({ user: req.params.user, password: req.params.password }, 'DamianRatajczak');
	//res.set('Content-Type', 'set-cookie')
	console.log(Date.now()+360000)
	res.cookie("_keseasdasdw22" , token, {maxAge : Date.now() + 360000}).send("Cookie Sended")
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