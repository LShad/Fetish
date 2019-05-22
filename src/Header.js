import React from 'react';
import './Header.css';

class Header extends React.Component{
	render(){
		return(
			<div className="header-contener">
      			<div className="row">
        			<div className="col">
         				<img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/60339771_2207981582621007_4250728505785974784_n.png?_nc_cat=1&_nc_ht=scontent-waw1-1.xx&oh=bb917460c6f57e27c7c3bba90dc7fab3&oe=5D99AAC9" 
         				className="img-fluid" style={{maxHeight: '100px'}}/>
        			</div>
        			<div className="col  border border-primary text-right my-auto">
         				<div className="dropdown">
						  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Dropdown button
						  </button>
						  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Action</a>
						    <a className="dropdown-item" href="#">Another action</a>
						    <a className="dropdown-item" href="#">Something else here</a>
						  </div>
						</div>
        			</div>
      			</div>
   			</div>
		);
	}
}

export default Header;