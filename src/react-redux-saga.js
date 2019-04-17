import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div>About</div>
	}
}


class Photo extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return <div>Photo</div>
	}
}

ReactDOM.render(<div><About></About><Photo></Photo></div>, document.getElementById('main'));




