import React from 'react';

class FetishCard extends React.Component{
	render(){
		return(
					<div className="card w-50">
					  <div className="card-body">
					    <h5 className="card-title body-font-h1">
					    	{this.props.imie}
					    </h5>
					    <h6 className="card-subtitle">
						   <img className="img-fluid" src="test.jpg" alt="asd"/>
					    </h6>
					    <p className="card-text body-font-h2">
					    	Fetyszysta Magicznego Posterunku
					    </p>
					  </div>
					</div>
		);
	}
}

export default FetishCard;