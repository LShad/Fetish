import React from 'react';
import FetishCard from './FetishCard';
import FetishWidgets from './FetishWidgets';
import './AppBody.css';

class AppBody extends React.Component{
	render(){
		return(
				<div className="container border border-primary" style={{maxWidth:'1000px'}}>
					<div className="d-inline-flex border border-secondary w-100 justify-content-center body-margin-top">
						<FetishCard imie="Damian Ratajczak"/>
						<FetishWidgets imie="xd"/>
					</div>
      			</div>
		);
	}
}

export default AppBody;