export default class Form extends React.Component{
	render(){
		let props = this.props;
		return <div className="component form">
			<form action={props.action} method={props.methos}>
				{props.children}
			</form>
		</div>;
	}
}
