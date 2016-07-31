class RadioList extends React.Component{
	render(){
  	const items = this.props.items,
    			itemHandler = this.props.itemHandler,
          radioListName = this.props.id,
          checks = [];
    if(items && items.forEach && typeof items.forEach == 'function'){
    	items.forEach((item)=>{
      	const [v,t] = itemHandler?itemHandler(item):[item.val,item.text];
      	checks.push(<li><Radio val={v} text={t} name={radioListName}/></li>);
      })
    }
    return <div className="component"><ul>{checks}</ul></div>
  }
}
