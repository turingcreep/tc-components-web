class Password extends React.Component{
	render(){
  	return <div className="component"><input type="password" value={this.props.val} name={this.props.name}/><label>{this.props.text}</label></div>;
  }
}
