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
		 						.catch( () =>{
		 							this.setState({
		 								Login: false,
		 								Show: true,
		 							})
		 						}
		 						)
		}

	  	const _auth = await req()

	}

	render(){

		const { Login, Register, Show } = this.state;


		return(
		
			<React.Fragment>
			{ Show ? (
				 !Login ? (
					<div className="container-fluid h-100 border border-primary" >
						<div className="d-inline-flex w-100  h-50 border border-secondary align-items-center">
							<div className="d-flex w-50 border">
								<img className="img w-100 h-100" src="logo.png" alt="logo"/>
							</div>
							<div className="d-flex w-50 h-50 border">
								<div className="input-group-prepend border w-50">
				    				<input id="username" name="username" type="text" className="form-control w-100 h-25 .fonts" placeholder="Username"/>
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