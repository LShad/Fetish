import React from 'react';

class FetishCard extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			img: '',
			exists: true,
			username:'',
			city: '',
			about: ''
		}

	}

	async componentWillMount(){
		let user_id = 0
		let city = ''
		let about = ''
		let username = ''
		
		const userToShow = async ()=>{ 
			let asd = await fetch('http://localhost:3001/card/' + this.props.token, {method:'POST'})
			.then(data=>data.json())
			.then(data=>{
				user_id = data.user
				username = data.username
				city = data.city
				about = data.about
			})
		}
		await userToShow()

		if(user_id>0){
			fetch('http://localhost:3001/images/' + this.props.token + '/userid/' + user_id.toString(), {method:'POST'})
			.then(data=>data.json())
			.then(data=>{
				this.setState({
					img: 'data:image;base64,' + data.image,
					exists: true,
					username: username,
					city: city,
					about: about
				})
			})
		}
		else{
			this.setState({
				exists: false
			})
		}
	}

	render(){

		const { img, exists, username, city, about } = this.state

		return(
					<div className="card w-50">
					  <div className="card-body">
					    <h5 className="card-title body-font-h1">
					    {
					    	exists ? (<div>{username}</div>) : (<div>Nie ma fetyszy wincy</div>) 
					    }
					    </h5>
					    <h6 className="card-subtitle">
					    	{city}
						   <img className="img-fluid" src={img}/>
					    	
					    </h6>
					    <p className="card-text body-font-h2">
					    	{about}
					    </p>
					  </div>
					</div>
		);
	}
}

export default FetishCard;