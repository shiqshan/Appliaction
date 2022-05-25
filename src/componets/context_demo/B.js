import React, {Component} from 'react';
import C from "./C";

class B extends Component {
    render() {
        return (
            <div className='b'>
                B组件
                <C/>
            </div>
        );
    }
}

export default B;