import React from 'react';

class AppBody extends React.Component{
	render(){
		return(
			<div className="container-fluid border border-primary h-100">
				<div className="container border border-primary h-100">
					<div className="h-100 row align-items-center border border-primary">
					<div className="border border-primary d-flex justify-content-center w-100">
					<div className="card" style={{width: "18rem"}}>
					  <div className="card-body">
					    <h5 className="card-title">Card title</h5>
					    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <a href="" className="card-link">Card link</a>
					    <a href="" className="card-link">Another link</a>
					  </div>
					</div>
					</div>
					</div>
      			</div>
   			</div>
		);
	}
}

export default AppBody;