import React from 'react';


class MyProfileWidget extends React.Component{
	render(){
		return(
			<div className="w-100 mb-4 border border-secondary">
				<img className="img-fluid w-25 rounded-circle m-3" src="test.jpg" alt="asd"/>
					<div className="d-inline" style={{fontSize: '1.5vw'}}>
						{this.props.imie}
					</div>
   			</div>
		);
	}
}

export default MyProfileWidget;