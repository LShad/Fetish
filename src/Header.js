import React from 'react';
import './Header.css';

class Header extends React.Component{
	constructor(props){
		super();
		this.state = {
			clicked: false
		}

		this.onClick = this.onClick.bind(this)
	}

	onClick(event){
 	
		console.log("elo");
		var event = new Event("show.bs.dropdown")
		let element = document.getElementById("heh");
		element.dispatchEvent(event);
		console.log(element)
		console.log(event)
		this.setState({ clicked:true})

	}

	componentDidMount(props){
		console.log("elo");
	}


	render(){
		const { clicked } = this.state;

		return(
			<div className="header-container ">
				<div className="header border border-primary">
					<img className="logo-container" src="logoScaled.png" alt="logo"/>
					<div className="icons-container" src="logoScaled.png" alt="logo">
						
						<div id="heh" className="dropdown">
							<div onClick={this.onClick}>
								<img className="buttonej" src="heart.png" alt="logo" />
							</div>
							<div className="dropdown-menu">
							    <a className="dropdown-item" href="#">Gibonson dodał nowe zdjęcie</a>
							</div>
						</div>


						<div className="">
							<div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img className="buttonej" src="notifications.png" alt="logo"/>
							</div>
							<div className="dropdown-menu dropdown-menu-right">
							    <a className="dropdown-item" href="#">Notify 1</a>
							    <a className="dropdown-item" href="#">Notify 2</a>
							    <a className="dropdown-item" href="#">Notify 3</a>
							    <div className="dropdown-divider"></div>
							    <a className="dropdown-item" href="#">Wyczyść</a>
							</div>
						</div>



						<div className="">
							<div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img className="buttonej" src="settings.png" alt="logo"/>
							</div>
							<div className="dropdown-menu dropdown-menu-right">
							    <a className="dropdown-item" href="#">Ustawienia</a>
							    <a className="dropdown-item" href="#">Pomoc</a>
							    <a className="dropdown-item" href="#">Zgłoś</a>
							    <a className="dropdown-item" href="#">Donate</a>
							    <div className="dropdown-divider"></div>
							    <a className="dropdown-item" href="#">Wyloguj</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;