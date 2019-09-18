import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux';
function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                counter: state.counter + 1
            }
        case 'MIN':
            return {
                counter: state.counter - 1
            }
        default:
            return {
                counter: state.counter
            };
    }

}
const store = createStore(reducer, {
    counter: 0
});
class Container extends Component {
    constructor(props) {
        super(props);
    }

}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}
const tracking = (e) =>{
    console.log(e);
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        increment: (e)=> {
            tracking(e);
            return {type:'ADD'}
        },
        decrement: (e)=>{
            tracking(e);
            return {type:'MIN'}
        }
    },dispatch);
}

class About extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div onClick={this.props.increment}>About:{this.props.counter}</div>
    }
}
class Photo extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <div onClick={this.props.decrement}>Photo:{this.props.counter}</div>
    }
}
const WrappedAbout = connect(mapStateToProps,mapDispatchToProps)(About);
const WrappedPhoto = connect(mapStateToProps,mapDispatchToProps)(Photo);
ReactDOM.render(<Provider store={store}><WrappedAbout></WrappedAbout><WrappedPhoto></WrappedPhoto></Provider>, document.getElementById('main'));




