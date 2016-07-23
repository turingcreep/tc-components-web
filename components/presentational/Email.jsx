class Email extends React.Component{
	render(){
  	return <div className="component"><input type="email" value={this.props.val} name={this.props.name}/><label>{this.props.text}</label></div>;
  }
}
