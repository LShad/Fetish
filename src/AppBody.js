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
			token: this.props.token,
		}
	}

	verifyToken(token){
		const _cookie = new FetishCookie()
		_cookie.checkCookieToken(token)
	}

	componentWillMount(){
		this.verifyToken(this.state.token)
		
	}
	
	render(){
		const { username, token } = this.state;
		return(
			<React.Fragment>
				<Header/>
				<div className="container border border-primary" style={{maxWidth:'1000px'}}>
					<div className="d-inline-flex border border-secondary w-100 justify-content-center body-margin-top">
						<FetishCard token={token} username={username}/>
						<FetishWidgets token={token} username={username}/>
					</div>
      			</div>
      		</React.Fragment>
		);
	}
}

export default AppBody;