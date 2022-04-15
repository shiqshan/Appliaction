// 容器组件
import React, {Component} from 'react';

import {connect} from "react-redux";
import {decrementAction, incrementAction, incrementAsyncAction} from "../../redux/count_action";

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
        return (
            <div>
                <h1>Count组件, 当前求和为：{this.props.count}</h1>
                <h2>下方人数为：{this.props.person.length}</h2>
                <button onClick={this.increment}>加一下</button>
                &nbsp;
                <button onClick={this.decrement}>减一下</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加一下</button>
                <hr/>
            </div>
        );
    }
}

//映射状态
const mapStateToProps = state => ({count: state.sum, person: state.person})

//映射操作状态的方法
const mapDispatchToProps = dispatch => ({
        increment: number => dispatch(incrementAction(number)),  //通知redux 执行
        decrement: number => dispatch(decrementAction(number)),
        incrementAsync: (number, time) => dispatch(incrementAsyncAction(number, time)),
    })


export default connect(mapStateToProps, mapDispatchToProps)(Count)
