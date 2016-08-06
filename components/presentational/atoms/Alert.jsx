class Alert extends React.Component{
	render(){
  	return <div className="component alert">
    	<div className="alert-overlay"></div>
      <div className="alert-body">
      	<div className="alert-content">{this.props.children}</div>
        <div className="alert-footer">
        	<button>Ok</button>
        </div>
      </div>
    </div>;
  }
}
