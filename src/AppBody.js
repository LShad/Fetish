import React from 'react';
import FetishCard from './FetishCard';
import FetishWidgets from './FetishWidgets';

class AppBody extends React.Component{
	render(){
		return(
			<div className="container-fluid border border-primary h-100">
				<div className="container border border-primary h-100">
					<div className="h-100 row align-items-center border border-primary">
					<div className="border border-primary d-flex justify-content-center w-100 h-75">
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