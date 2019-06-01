import React from 'react';
import './Header.css';
import $ from 'jquery';
import Cookies from 'js-cookie';

class Header extends React.Component{
	constructor(props){
		super();
		this.state = {
			clicked: false,
			count: 1,
		}

		this.onClick = this.onClick.bind(this)
		this.logout = this.logout.bind(this)
	}

	onClick(){

			fetch("http://localhost:3001/notifications")
				.then(resp => {
				    console.log(resp.text())
				})

			  	this.setState({
					clicked:true,
					count: this.state.count + 1
				})
	 		
	 		this.setState({
	 			clicked:false
	 		})

	}

	logout(){
		Cookies.remove('FetishCookie', { path: '' });
		window.location.replace("/");
	}

	componentDidUpdate(){
	
	}

	componentDidMount(){
		$('#serce').on('click', this.onClick);
	}


	render(){
		const { clicked, count } = this.state;
		var items = []

		for (var i=1; i<=count; i++){
			items.push(
				<a key={i} className="dropdown-item" href="#">{i}</a>
				)
		}

		return(
			<React.Fragment>
				<div className="header-container ">
					<div className="header border border-primary">
						<img className="logo-container" src="logoScaled.png" alt="logo"/>
						<div className="icons-container" src="logoScaled.png" alt="logo">
							
							<div className="btn-group">
							  <div id="serce" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  	<img className="buttonej" src="heart.png" alt="logo" />
							  </div>
							  <div className="dropdown-menu">
							  { clicked ? (
							  	<div>
							  		{items}
							    </div> )
							  	: ( <div>Wczytywanie</div> ) }
							  </div>
							</div>

							<div className="btn-group">
							  <div id="serce" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  	<img className="buttonej" src="notifications.png" alt="logo" />
							  </div>
							  <div className="dropdown-menu">
							  { clicked ? (
							  	<div>
							  		<a className="dropdown-item" href="#">{count}</a>
							    </div> )
							  	: ( <div>Wczytywanie</div> ) }
							  </div>
							</div>

							<div className="btn-group">
							  <div id="serce" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							  	<img className="buttonej" src="settings.png" alt="logo" />
							  </div>
							  <div className="dropdown-menu">
							  	<div>
							  		<a className="dropdown-item" href="#">Ustawienia</a>
							  		<a className="dropdown-item" onClick={this.logout}>Wyloguj</a>
							    </div>
							  </div>
							</div>

						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Header;