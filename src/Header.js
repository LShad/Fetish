import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div className="container border bg-white">
				<div className="row align-items-center">
					<div className="col">
   						<div className="d-flex flex-row bd-highlight">
   							<img src="logo.png" className="img-fluid" style={{width: "12rem", height: "4.5rem"}} alt="Fetish"/>
						</div>
					</div>
					<div className="col">
						<div className="d-flex flex-row-reverse bd-highlight h-100 ">
							<img src="logo.png" className="img-fluid" style={{width: "7rem", height: "2.5rem"}} alt="Fetish"/>
			  				<img src="logo.png" className="img-fluid" style={{width: "7rem", height: "2.5rem"}} alt="Fetish"/>
			  				<img src="logo.png" className="img-fluid" style={{width: "7rem", height: "2.5rem"}} alt="Fetish"/>
			  			</div>
					</div>
				</div>
   			</div>
		);
	}
}

export default Header;