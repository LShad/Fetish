const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const crypto = require('crypto-js');
var jwt = require('jsonwebtoken');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '83.20.239.133',
    port : 60891,
    user : 'postgres',
    password : 'dupadupa',
    database : 'Fetish'
  }
});

app.use(cors({credentials: true, origin: ['http://localhost:3000', 'http://localhost:3002']}));

app.post('/register/user/:user/password/:password', (req, res) => {

	if(req.params.user!=="" || req.params.password !== ""){
		knex('g.Accounts').insert([{user: req.params.user.toLowerCase(), passwd: req.params.password}])
		.then(data=>{
			res.send({status:true})
			})
		.catch(err=>{
			res.send({status:false, errorCode: err.code})
		})	
	}else{
		res.end()
	}
});

app.post('/', (req, res) => {

})

app.post('/login/user/:user/password/:password', (req, res) => {
	knex.select('id')
	  .from('g.Accounts')
	  .where({
	  	user: req.params.user,
	  	passwd: req.params.password
	  })
	  .then((rows)=>{
	    if(rows.length === 1){
	    	try{
	    		const hash = crypto.AES.encrypt(rows[0].id.toString(), 'DamianRatajczak:)!').toString()
			    var token = jwt.sign({ id: rows[0].id.toString() }, 'DamianRatajczak:)!');
			    res.cookie("FetishCookie" , token, {maxAge : Date.now() + 360000})
			    .send({status: true})
	    	}catch(err){
	    		res.end()
	    	}	
		}
		else{
			res.send({status: false})
		}
	  })
	  .catch((error)=>{
	  	res.end()
	  });

})

app.post('/auth/:token', (req, res) => {
	jwt.verify(req.params.token, 'DamianRatajczak:)!', (err, decoded)=>{
		if(err){
			res.json({
				status: false
			})
		}
		else{
			knex.select('user')
			  .from('g.Accounts')
			  .where({
			  	id: decoded.id
			  })
			  .then(rows=>{
			  	if(rows.length === 1){
			  		res.json({
						status: true,
						username: rows[0].user.toString(),
					})
			  	}
			  	else{
			  		res.json({
						status: false
					})
			  	}
			  })
		}
	});

})

app.post('/card/:token', (req, res) => {

		const decoded = jwt.decode(req.params.token)

		knex
		.select(knex.raw('user_id_show, "user", trim(city) as city, trim(about) as about'))
		.from('g.Card')
		.innerJoin('g.Accounts', 'g.Card.user_id_show', 'g.Accounts.id')
		.where({
			"g.Card.user_id": decoded.id
		})
		.then(rows=>{
			console.log(rows)
			if(rows.length>0){
				res.json({
						user: rows[0].user_id_show,
						username: rows[0].user,
						city: rows[0].city,
						about: rows[0].about,
				})
			}
			else{
				res.json({
					user: '-1'
				})
			}
		})
}
)

app.post('/images/:token/userid/:user_id', (req, res) => {
		const decoded = jwt.decode(req.params.token)
		knex.select('img')
		.from('g.Images')
		.where({
			user_id: req.params.user_id
		})
		.then(rows=>{
			if(rows.length>0){
				res.json({
						image: rows[0].img.toString(),
				})
			}
		}
		)
}
)

app.post('/image/:token', (req, res) => {
		const decoded = jwt.decode(req.params.token)
		knex.select('img')
		.from('g.Images')
		.where({
			user_id: decoded.id
		})
		.then(rows=>{
			if(rows.length>0){
				res.json({
						image: rows[0].img.toString(),
				})
			}
		}
		)
}
)

app.post('/image/:token', (req, res) => {
		console.log('zapytano')
		const decoded = jwt.decode(req.params.token)
		knex.select('img')
		.from('g.Images')
		.where({
			user_id: decoded.id
		})
		.then(rows=>{
			if(rows.length>0){
				res.json({
						image: rows[0].img.toString(),
				})
			}
		}
		)
}
)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))