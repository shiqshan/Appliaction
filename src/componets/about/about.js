import React, {Component} from 'react';
import Child from "./child";

class About extends Component {

    state = {
        count: 0
    }

    handle = (e) => {
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
    }

    //防抖
    debounce = (callback, wait) => {
        let timer = null;
        return () => {
            if (timer) {
                clearTimeout(timer)
                timer = null;
            }
            timer = setTimeout(() => {
                callback();
            }, wait)
        }
    }

    //节流
    throttle = (callback, wait) => {
        let time = Date.now();
        return () => {
            let nowTime = Date.now();
            // 如果两次时间间隔超过了指定时间，则执行函数。
            if (wait <= nowTime - time) {
                callback();
            }
        }
    }

    render() {
        const arr = [12, 2, 4]
        return (
            <div>
                {/* <span>行元素</span>*/}
                {/*<div className={'kkk'}>*/}
                {/*    <div className={'hhh'}></div>*/}
                {/*</div>*/}
                {/*<div className={'fixed'}></div>*/}
                <div className={'kkk'} onClick={this.handle}>
                    {/*{this.state.count}*/}
                    <Child/>
                </div>
            </div>
        );
    }
}

export default About;