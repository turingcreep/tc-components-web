class Carousel extends React.Component{
  constructor(props,context){
	  super(props,context);
    this.state =  {
    	queue : React.Children.map(this.props.children,(x)=>{return <span className="carousel-item">{x}</span>;})
    };
  }
  rotateLeft(){
  	let _state = this.state,
    		_q = _state.queue,
    		_elem = _q.shift();
    
    _q.push(_elem);
    this.setState(_state)
  }
  rotateRight(){
  	let _state = this.state,
    		_q = _state.queue,
    		_elem = _q.pop();
    
    _q.unshift(_elem);
    this.setState(_state);
  }
  render(){
  	return <div className="component carousel">
            <div className="carousel-left-nav" onClick={this.rotateLeft.bind(this)}></div>
            <div className="carousel-content">
  						{this.state.queue}
  					</div>
            <div className="carousel-right-nav" onClick={this.rotateRight.bind(this)}></div>
  				</div>;
  }
}
