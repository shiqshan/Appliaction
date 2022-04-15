import React, {Component} from 'react';
import store from '../../redux/store'
class Count extends Component {

    increment = () => {
        console.log('888')
       store.dispatch({type: 'increment', data: 1})
    }

    decrement = () => {
        console.log('777')
        store.dispatch({type: 'decrement', data: 1})
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <button onClick={this.increment}>加一下</button>&nbsp;
                <button onClick={this.decrement}>减一下</button>
            </div>
        );
    }
}

export default Count;