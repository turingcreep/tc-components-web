class CheckBoxList extends React.Component{
	render(){
  	const items = this.props.items,
    			itemHandler = this.props.itemHandler,
          checks = [];
    if(items && items.forEach && typeof items.forEach == 'function'){
    	items.forEach((item)=>{
      	const [v,t] = itemHandler?itemHandler(item):[item.val,item.text];
      	checks.push(<li><CheckBox val={v} text={t}/></li>);
      })
    }
    return <div className="component"><ul>{checks}</ul></div>
  }
}
