const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
const crypto = require('crypto-js');
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
	    		//console.log(rows[0].id.toString())
	    		const hash = crypto.AES.encrypt(rows[0].id.toString(), 'DamianRatajczak:)!').toString()
			    var token = jwt.sign({ id: hash }, 'DamianRatajczak:)!');
			    res.cookie("FetishCookie" , token, {maxAge : Date.now() + 360000})
			    .send({status: true})
	    	}catch(err){
	    		res.send()
	    	}
	    	
		}else{
			res.send({status: false})
		}
	  })
	  .catch((error)=>{
	  	//console.error(error);
	  	res.end()
	  });

})

app.post('/auth/:auth', (req, res) => {
	const decoded = jwt.verify(req.params.auth, 'DamianRatajczak:)!', (err, decoded)=>{
		if(err){
			res.json({status: false})
		} else{
			//console.log('tutaj')
			//console.log(decoded)

			//console.log(crypto.AES.decrypt(decoded.id.toString(), 'DamianRatajczak:)!').toString())
			res.json({status: true})
		}
	});

})

app.post('/card/:token', (req, res) => {

		const decoded = jwt.decode(req.params.token)
		//console.log(decoded.id)
		if(decoded.id === undefined || decoded.id === null){
			//oprogramowac !!
		}else{
			console.log('tutaj1')
			console.log(crypto.AES.decrypt(decoded.id, 'DamianRatajczak:)!').toString(crypto.enc.Utf8))
		}

	
})

app.get('/login', (req, res) => {
	knex.select('AAA').from('g.Notifications').then((data=>{
		res.send(JSON.stringify(data))
	}));
	
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))