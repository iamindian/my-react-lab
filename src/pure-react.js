import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const EnContext = React.createContext("en");

class SubView extends Component {
	static contextType = EnContext;
	constructor(props) {
		super(props);
		// setInterval(()=>{
		// 	this.props.fromSub(Math.random());
		// },2000);

	}
	componentDidMount() {
		console.log(this.context);
	}
	componentWillUnmount(){
		
	}
	render() {
		return <div>child:{this.props.p1}</div>
	}
}
SubView.contextType = EnContext;

class View extends Component {
	static contextType = EnContext;
	constructor(props) {
		super(props);
		this.state = {
			test: 'test',
			child: ''
		};
	}
	fromSub(p1) {
		this.setState({
			child: p1
		});
		console.log('from sub:' + p1);
	}

	shouldComponentUpdate(np, ns, nc) {
		console.log('shouldComponentUpdate');
		return true;
	}

	// componentWillReceiveProps(p) {
	// 	console.log('componentWillReceiveProps');
	// 	console.log(p);
	// }

	

	componentWillUpdate(np, ns, nc) {
		console.log('componentWillUpdate');
		console.log([np, ns, nc]);
	}

	//new 
	static getDerivedStateFromProps(np,ps){ //initial state by next props
		return {};
	}

	

	getSnapshotBeforeUpdate(pp, ps){ //pre-commited phase
		console.log('getSnapshotBeforeUpdate');
		console.log(pp);
		console.log(ps);
		return {};
	}

	componentDidMount(){
		console.log(this.context);//react@16.6.0 fix the issue of accessing context by this.context

	}
	componentDidUpdate(pp, ps, snap){
		console.log('componentDidUpdate');
		console.log('previous props:' + JSON.stringify(pp));
		console.log('previous state:' + JSON.stringify(ps));
		console.log('snap returned from getSnapshotBeforeupdate:' + JSON.stringify(snap));
	}

	componentDidCatch(){
		console.log('componentDidCatch called');
	}
	
	componentWillUnmount(){
		console.dir('componentWillUnmount called');
		
	}

	render() {
		return <div>
			<EnContext.Provider value='en'>
				<EnContext.Consumer>{value => <div>{value}</div>}</EnContext.Consumer>
				<div>parent:{this.props.p1},from child:{this.state.child}</div>
				<SubView {...this.props} fromSub={this.fromSub.bind(this)}></SubView>
			</EnContext.Provider>
		</div>
	}
}
View.contextType = EnContext;
let a = 'i am from children';
ReactDOM.render(
	<View p1={a}></View>
	, document.getElementById('main'));




