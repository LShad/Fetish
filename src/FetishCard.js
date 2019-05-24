import React from 'react';

class FetishCard extends React.Component{
	render(){
		return(
					<div className="card">
					  <div className="card-body">
					    <h5 className="card-title">
					    	{this.props.imie}
					    </h5>
					    <h6 className="card-subtitle">
						   
					    </h6>
					    <p className="card-text">content</p>
					  </div>
					</div>
		);
	}
}

export default FetishCard;