class Card extends React.Component{
	render(){
  	let [header,content,footer] = this.props.children;
  	return <div className="component card">
  						<header>
                <h3 className="card-header">
                  {header}
                </h3>
              </header>
              <article>
                <div className="card-content">
                  {content}
                </div>
              </article>
              <footer>
                <div className="card-footer">
                  {footer}
                </div>
              </footer>
  				</div>;
  }
};
