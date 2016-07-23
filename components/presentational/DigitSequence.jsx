class DigitSequence extends React.Component{
	render(){
  	const len = this.props.length,
    			breakLen = this.props.breakLen,
    			digits = [];
    
    for(let i=0;i<len;i++){
    	if(!((i+1)%breakLen)){
      	digits.push(<input type="number" min="0" className="digit digit-break"/>);
      }
      else{
      	digits.push(<input type="number" min="0" className="digit"/>);
      }
    }
    
    return <div className="component">{digits}</div>;
  }
}
