import React from 'react';
import FetishCard from './FetishCard';
import FetishWidgets from './FetishWidgets';
import Header from './Header';
import FetishCookie from './FetishCookie'
import './AppBody.css';

class AppBody extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			username: this.props.username,
		}
	}

	componentWillMount(){
		const _cookie = new FetishCookie()
		console.log(_cookie)
		fetch('http://localhost:3001/card/' + _cookie.getCookie(), {method:'POST'})
	}
	
	render(){
		const { username } = this.state;
		return(
			<React.Fragment>
				<Header/>
				<div className="container border border-primary" style={{maxWidth:'1000px'}}>
					<div className="d-inline-flex border border-secondary w-100 justify-content-center body-margin-top">
						<FetishCard imie={username}/>
						<FetishWidgets imie="xd"/>
					</div>
      			</div>
      		</React.Fragment>
		);
	}
}

export default AppBody;