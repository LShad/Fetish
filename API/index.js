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
	
	console.log(req.params.user)
	console.log(req.params.password)

	knex.select('id')
	  .from('g.Accounts')
	  .where({
	  	user: req.params.user,
	  	passwd: req.params.password
	  })
	  .then((rows)=>{
	    if(rows.length === 1){
		    var token = jwt.sign({ id: rows[0].id }, 'DamianRatajczakMagicznyPosterunek:)');
		    res.cookie("FetishCookie" , token, {maxAge : Date.now() + 360000})
		    .send({status: true})
		}else{
			res.send({status: false})
		}
	  })
	  .catch((error)=>{
	  	console.error(error);
	  	res.end()
	  });

})

app.post('/auth/:auth', (req, res) => {

	const decoded = jwt.verify(req.params.auth, 'DamianRatajczakMagicznyPosterunek:)', (err, decoded)=>{
		if(err){
			res.json({status: false})
		} else{
			res.json({status: true})
		}
	});

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