import React, {Component} from 'react';

class Count extends Component {

    increment = () => {
        this.props.increment(1)
    }

    decrement = () => {
        this.props.decrement(1)
    }

    incrementAsync = () => {
        this.props.incrementAsync(1, 500)
    }

    render() {
        console.log('ui组件收到的props',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
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