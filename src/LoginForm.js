import React from 'react';
import AppBody from './AppBody';
import Header from './Header';
import Cookies from 'js-cookie';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Login: false,
			Register: false,
			Show: false,
			UserValue: '',
			PasswordValue: '',
		}

		this.Login = this.Login.bind(this);
		this.Register = this.Register.bind(this);
		this.LoginOnChange = this.LoginOnChange.bind(this)
		this.PasswordOnChange = this.PasswordOnChange.bind(this)
	}

	Login(event){

		if (this.state.UserValue == ""){ 
		    window.alert("Please enter your Username"); 
		    event.target.focus(); 
	 
	  	}else{
			
	  		fetch('http://localhost:3001/user/'+ this.state.UserValue + '/password/' + this.state.PasswordValue, {method:'POST', credentials: 'include'})
	  		.then(data=>data.json())
	  		.then(data=>{
	  			console.log(data.status)
	  			if(data.status === true){
	  				this.setState({
						Login: true,
						Show: true,
					})
	  			}
	  		})

			
		}	
	}

	LoginOnChange(event){
		this.setState({
			UserValue: event.target.value
		})
	}

	PasswordOnChange(event){
		this.setState({
			PasswordValue: event.target.value
		})
	}

	Register(){
		
		this.setState({
			Register: true
		})	

	}

	async componentWillMount(){


	  	const req = async () => {
		 	
		 	const auth = Cookies.get('FetishCookie')
		 	console.log(auth)
		 	let response = await fetch('http://localhost:3001/auth/' + auth, {method:'POST'})
		 						.then(data=>data.json())
		 						.then(data=>{
		 							this.setState({
		 								Login: data.status,
		 								Show: true,
		 							})
		 							console.log('Token poprawny')
		 							console.log(data.status)
		 						})
		 						.catch( () =>{
		 							this.setState({
		 								Login: false,
		 								Show: true,
		 							})
		 						})
		}

	  	const _auth = await req()
	}

	render(){

		const { Login, Register, Show, UserValue, PasswordValue } = this.state;


		return(
		
			<React.Fragment>
			{ Show ? (
				 Login ? (
					<div className="container h-100 border border-primary" >
						<div className="d-inline-flex w-100  h-50 border border-secondary align-items-center">
							<div className="d-flex w-50 border">
								<img className="img w-100 h-100" src="logo.png" alt="logo"/>
							</div>
							<div className="d-flex flex-column w-50 h-50 border border-primary">
								<div className="input-group-prepend border w-50 h-25">
				    				<input id="username" onChange={ this.LoginOnChange } value={ UserValue } name="username" type="text" className="form-control w-100 h-100 .fonts" placeholder="Username"/>
				 				</div>
				 				<div className="input-group-prepend border w-50 h-25">
				    				<input id="password" onChange={ this.PasswordOnChange } value={ PasswordValue } name="password" type="text" className="form-control w-100 h-100 .fonts" placeholder="Password"/>
				 				</div>
				 				<div className="d-flex w-50 h-25 border">
				 					<button className="btn btn-secondary w-50" onClick={this.Login}>Zaloguj</button>
				 					<button className="btn btn-secondary w-50" onClick={this.Register}>Wykutaś</button>
				 				</div>
							</div>
							
						</div>
					</div>
					) : (
					<React.Fragment>
						<Header/>
						<AppBody/>
					</React.Fragment>
					)
				
				) : (<div/>) }
			</React.Fragment>
			
		);
	}
}

export default LoginForm;