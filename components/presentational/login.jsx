import Email from 'atoms/Email.jsx';
import Password from 'atoms/Password.jsx';
import Form from 'atoms/Form.jsx';


export default class Login extends React.Component{
	render(){
		return <div className="component Login">
				<Form action="/login" method="POST">
					<label for="uname">Username : </label>
					<Email id="uname"/>
					<label for="pwd"> Password : </label>
					<Password id="pwd"/>
				</Form>
			</div>;
	}
}
