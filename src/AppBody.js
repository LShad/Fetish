import React from 'react';
import FetishCard from './FetishCard';
import FetishWidgets from './FetishWidgets';

class AppBody extends React.Component{
	render(){
		return(
			<div id="AppBody" className="container-fluid border border-primary" style={{backgroundColor:'grey'}}>
				<div className="container" style={{marginTop: '100px'}}>
					<div className="row align-items-center">
					<div className="d-flex justify-content-center w-100 h-75">
						<FetishCard imie="Patryk"/>
						<FetishWidgets/>
					</div>
					</div>
      			</div>
   			</div>
		);
	}
}

export default AppBody;