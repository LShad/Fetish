import React from 'react';
import MyProfileWidget from './MyProfileWidget';

class FetishWidgets extends React.Component{
	render(){
		return(
			<div className="d-flex flex-column w-25 ml-4 h-25">
				<MyProfileWidget imie={this.props.imie}/>
   			</div>
		);
	}
}

export default FetishWidgets;