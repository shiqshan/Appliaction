import React, {Component} from 'react';
import B from "./B";
import {MyContext} from './context'


// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
class A extends Component {

    state = {
        name: '史清山'
    }
    render() {
        return (
            <div className='a'>
                <MyContext.Provider value={this.state.name}>
                    A组件
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
}

export default A;