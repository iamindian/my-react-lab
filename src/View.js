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
		// setInterval(()=>{
		// 	this.setState({
		// 		test:Math.random()
		// 	})
		// },1000);
	}
	fromSub(p1) {
		this.setState({
			child: p1
		});
		console.log('from sub:' + p1);
	}
	// componentWillReceiveProps(p) {
	// 	console.log('componentWillReceiveProps');
	// 	console.log(p);
	// }

	// shouldComponentUpdate(np, ns, nc) {
	// 	console.log('shouldComponentUpdate');
	// 	console.log([np, ns, nc]);
	// 	return true;
	// }

	// componentWillUpdate(np, ns, nc) {
	// 	console.log('componentWillUpdate');
	// 	console.log([np, ns, nc]);
	// }

	// new 

	// getSnapshotBeforeUpdate(pp, ps){
	// 	console.log('getSnapshotBeforeUpdate');
	// 	console.log(pp);
	// 	return {};
	// }

	componentDidMount(){
		console.log(this.context);

	}
	// componentDidUpdate(pp, ps, snap){
	// 	console.log('componentDidUpdate');
	// 	console.log('previous props:' + JSON.stringify(pp));
	// 	console.log('previous state:' + JSON.stringify(ps));
	// }

	// componentDidCatch(){
	// 	console.log('componentDidCatch');
	// }

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
let a = Math.random();
ReactDOM.render(
	<View p1={a}></View>
	, document.getElementById('main'));
// setInterval(()=>{
// 	a = Math.random();
// 	ReactDOM.render(<View p1={a}></View>,document.getElementById('main'));
// },1000);



