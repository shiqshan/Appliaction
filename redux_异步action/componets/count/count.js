import React, {Component} from 'react';
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/count_action'
import store from "../../redux/store";

class Count extends Component {

    increment = () => {
        store.dispatch(incrementAction(1))
    }

    decrement = () => {
        store.dispatch(decrementAction(1))
    }

    incrementAsync = () => {
        store.dispatch(incrementAsyncAction(1, 500))
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <button onClick={this.increment}>加一下</button>
                &nbsp;
                <button onClick={this.decrement}>减一下</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加一下</button>
            </div>
        );
    }
}

export default Count;