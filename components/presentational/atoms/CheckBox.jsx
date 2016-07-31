class CheckBox extends React.Component{
	render(){
  	return <div className="component"><input type="checkBox" value={this.props.val}/><label>{this.props.text}</label></div>;
  }
}
