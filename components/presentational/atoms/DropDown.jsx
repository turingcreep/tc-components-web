class Option extends React.Component{
	render(){
		return <option {...this.props.attr} value={this.props.val}>{this.props.text}</option>;
	}
}
class DropDown extends React.Component{
	render(){
  	const items = this.props.items,
    			itemHandler = this.props.handler;
          
    let   options=[<Option val="-1" text='Please select'/>];
     
    if(items && items.forEach && typeof items.forEach == 'function'){
      items.forEach((item)=>{
      	let [v,t]= itemHandler?itemHandler(item):[item.val,item.text];
        options.push(<Option val={v} text={t}/>);
      });
    }
  	return <div className="component"><select>{options}</select></div>;
  }
}
