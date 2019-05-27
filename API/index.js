const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');

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

app.get('/notifications', (req, res) => {
	knex.select('AAA').from('g.Notifications').then((data=>{
		console.log(data)
		res.send("aga")
	}));
	
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