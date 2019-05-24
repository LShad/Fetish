import React from 'react';

class Header extends React.Component{
	render(){
		return(
			<div className="container border bg-white">
				<div className="row align-items-center">
					<div className="col">
   						<div className="d-flex flex-row bd-highlight">
   							<img src="1.png" className="img-fluid" width="35%" height="35%" alt="Fetish"/>
						</div>
					</div>
					<div className="col">
						<div className="d-flex flex-row-reverse bd-highlight h-100 ">
							<img src="1.png" className="img-fluid" width="20%" height="20%" alt="Fetish"/>
			  				<img src="1.png" className="img-fluid" width="20%" height="20%" alt="Fetish"/>
			  				<img src="1.png" className="img-fluid" width="20%" height="20%" alt="Fetish"/>
			  			</div>
					</div>
				</div>
   			</div>
		);
	}
}

export default Header;