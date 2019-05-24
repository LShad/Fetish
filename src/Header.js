import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div className="container bg-white">
				<div className="row align-items-center">
					<div className="col">
   						<div className="d-flex flex-row bd-highlight">
   							<img src="logo.png" className="img-fluid" style={{width: "40%", height: "40%"}} alt="Fetish"/>
						</div>
					</div>
					<div className="col">
						<div className="d-flex flex-row-reverse bd-highlight h-100 ">
							<img src="settings.png" className="img-fluid" style={{width: "5%", height: "5%"}} alt="Settings"/>
							<img src="empty.png" className="img-fluid" style={{width: "5%", height: "5%"}} alt=""/>
			  				<img src="notifications.png" className="img-fluid" style={{width: "5%", height: "5%"}} alt="Notifications"/>
			  				<img src="empty.png" className="img-fluid" style={{width: "5%", height: "5%"}} alt=""/>
			  				<img src="heart.png" className="img-fluid" style={{width: "5%", height: "5%"}} alt="Heart"/>
			  			</div>
					</div>
				</div>
   			</div>
		);
	}
}

export default Header;