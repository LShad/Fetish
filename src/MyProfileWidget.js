import React from 'react';


class MyProfileWidget extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			img: ''
		}
	}

	componentWillMount(){
		
		fetch('http://localhost:3001/image/' + this.props.token, {method:'POST'})
		.then(data=>data.json())
		.then(data=>{
			this.setState({
				img: 'data:image;base64,' + data.image
			})
		})
	}

	render(){
		const { img } = this.state
		return(
			<div className="w-100 mb-4 border border-secondary">
				<img className="img-fluid w-25 rounded-circle m-3" src={img}/>
					<div className="d-inline" style={{fontSize: '1.5vw'}}>
						{this.props.username}
					</div>
   			</div>
		);
	}
}

export default MyProfileWidget;