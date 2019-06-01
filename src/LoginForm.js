import React from 'react';
import AppBody from './AppBody';
import FetishCookie from './FetishCookie'

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

		function showAlert(alertType, focusElement){
			window.alert("Please enter your " + alertType ); 
		}

		if (this.state.UserValue == ""){ 
		    showAlert("username", event)
	 
	  	}else if(this.state.PasswordValue == ""){
	  		showAlert("password", event)
	  	}else{
			
	  		fetch('http://localhost:3001/login/user/'+ this.state.UserValue + '/password/' + this.state.PasswordValue, {method:'POST', credentials: 'include'})
	  		.then(data=>data.json())
	  		.then(data=>{
	  			console.log(data.status)
	  			if(data.status === true){
	  				this.setState({
						Login: true,
						Show: true,
					})
	  			}else{
	  				window.alert("Wrong username or password");
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

	Register(event){
		
		function showAlert(alertType, focusElement){
			window.alert("Please enter your " + alertType ); 
		}

		if (this.state.UserValue == ""){ 
		    showAlert("username", event)
	 
	  	}else if(this.state.PasswordValue == ""){
	  		showAlert("password", event)
	  	}else{
			
	  		fetch('http://localhost:3001/register/user/'+ this.state.UserValue + '/password/' + this.state.PasswordValue, {method:'POST', credentials: 'include'})
	  		.then(data=>data.json())
	  		.then(data=>{
	  			console.log(data)
	  			if (data.status === true){
	  				alert('Konto zostało utworzone')
	  			}else{
	  				switch (data.errorCode){
	  					case "23505":
	  						alert('Użytkownik już istnieje')
	  						break;
	  					default:
	  						alert('Wystąpił błąd wewnętrzny')
	  				}
	  			}
	  		})
		}	
	}

	async componentWillMount(){
	  	const req = async () => {
	  		const asd = new FetishCookie()
	  		const auth = asd.getCookie()
		 	let response = await fetch('http://localhost:3001/auth/' + auth, {method:'POST'})
		 						.then(data=>data.json())
		 						.then(data=>{
		 							this.setState({
		 								Login: data.status,
		 								Show: true,
		 							})
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
				 !Login ? ( 
					<div className="container h-100 border border-primary" >
					<div className="d-flex h-75 w-100 border border-primary">
						<div className="col-lg-12 w-100 h-50 align-self-center border border-secondary">
							<div className="col-lg-6 float-left w-100 border">
								<img className="img w-100 h-100" src="logo.png" alt="logo"/> 
							</div> 
							<div className="col-lg-6 float-left w-100 p-0 h-50 border border-primary">
							<div className="col w-75 h-100 login p-0 border border-primary">
								<div className="input-group-prepend border w-100 login_form">
				    				<input id="username" onChange={ this.LoginOnChange } value={ UserValue } name="username" type="text" className="form-control w-100 h-100 .fonts" placeholder="Username"/>
				 				</div>
				 				<div className="input-group-prepend border w-100 login_form"> 
				    				<input id="password" onChange={ this.PasswordOnChange } value={ PasswordValue } name="password" type="text" className="form-control w-100 h-100 .fonts" placeholder="Password"/>
				 				</div>
				 				<div className="d-flex w-100 login_buttons border">
				 					<button className="btn btn-secondary w-50 mr-1" onClick={this.Login}>Log in</button>
				 					<button className="btn btn-secondary w-50 mr-1" onClick={this.Register}>Register</button>
				 				</div>
							</div>
							</div> 
						</div>
						</div>
					</div>
					) : (
						<AppBody username={UserValue}/>
					)
				) : (<div/>) }
			</React.Fragment>
			
		);
	}
}

export default LoginForm;