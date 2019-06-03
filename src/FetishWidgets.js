import React from 'react';
import MyProfileWidget from './MyProfileWidget';

class FetishWidgets extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className="d-flex flex-column w-25 ml-4 h-25">
				<MyProfileWidget token={this.props.token} username={this.props.username}/>
   			</div>
		);
	}
}

export default FetishWidgets;