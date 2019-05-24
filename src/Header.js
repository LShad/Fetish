import React from 'react';
import './Header.css';

class Header extends React.Component{
	render(){
		return(
			<div className="container bg-white" style={{height: "5rem"}}>
				<div className="row align-items-center">
					<div className="col">
   						<div className="d-flex flex-row bd-highlight">
   							<img src="logo.png" className="img logo"  alt="Fetish"/>
						</div>
					</div>
					<div className="col">
						<div className="d-flex flex-row-reverse bd-highlight h-100 ">
							<img src="settings.png" className="img" style={{width: "1.5rem", height: "1.5rem"}} alt="Settings"/>
							<img src="empty.png" className="img" style={{width: "1rem", height: "1rem"}} alt=""/>
			  				<img src="notifications.png" className="img" style={{width: "1.5rem", height: "1.5rem"}} alt="Notifications"/>
			  				<img src="empty.png" className="img" style={{width: "1rem", height: "1rem"}} alt=""/>
			  				<img src="heart.png" className="img" style={{width: "1.5rem", height: "1.5rem"}} alt="Heart"/>
			  			</div>
					</div>
				</div>
   			</div>
		);
	}
}

export default Header;