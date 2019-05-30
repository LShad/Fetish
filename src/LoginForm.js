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
		}
		



		this.Login = this.Login.bind(this);
		this.Register = this.Register.bind(this);

	}

	Login(event){
		event.preventDefault()
		const username = document.getElementById("username");
		if (username.value == ""){ 
		    window.alert("Please enter your Username"); 
		    username.focus(); 
	 
	  	}else{
			
	  		fetch('http://localhost:3001/user/damian/password/Papsi20!', {method:'POST', credentials: 'include'})
	  		.then(data=>{console.log(data.text())})

			this.setState({
				Login: true,
				Show: true,
			})
		}	
	}

	Register(){
		this.setState({
			Register: true
		})	

	}

	async componentWillMount(){


	  	const req = async () => {
		 	
		 	const auth = Cookies.get('_keseasdasdw22')
		 	console.log(auth)
		 	let response = await fetch('http://localhost:3001/auth/' + auth, {method:'POST'})
		 						.then(data=>data.json())
		 						.then(data=>{
		 							this.setState({
		 								Login: data.status,
		 								Show: true,
		 							})
		 						})
		}

	  	const _auth = await req()

	}

	render(){

		const { Login, Register, Show } = this.state;


		return(
		
			<React.Fragment>
			{ Show ? (
				 !Login ? (
					<div className="container" style={{maxWidth:'1000px'}}>
						<div className="d-inline-flex w-100 justify-content-center body-margin-top">
							<div className="d-flex w-50">
								<img className="" src="logo.png" alt="logo"/>
							</div>
							<div className="d-block input-group w-50 mt-4">
			  					<div className="d-block w-50">
			  					<form method="POST" onSubmit={this.Login}>
				  					<div className="input-group-prepend">
				    					<input id="username" name="username" type="text" className="form-control" placeholder="Username"/>
				 					</div>
				  						<p/>
				  					<div className="input-group-prepend">
				    					<input type="password" name="password" className="form-control" placeholder="Password"/>
				 					</div>
				  						<p/>
				  						<button className="btn btn-secondary" onClick={this.Register}>
											{ Register ? (<div>...</div>) : (<div>Register</div>) } 
				  						</button>

				  						<button type="submit" className="btn btn-secondary ml-2">
				  							Login 
				  						</button>
				  				</form>
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