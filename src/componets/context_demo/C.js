import React, {Component} from 'react';
import {MyContext} from "./context";
import D from "./D";

class C extends Component {
    static contextType = MyContext;
    render() {
        return (
            <div className='c'>
                C组件接收到的context：{this.context}
                <D/>
            </div>
        );
    }
}

export default C;