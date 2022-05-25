import React from "react";
import {MyContext} from "./context";

const D = () => {
    return (
        <div className='d'>
            D函数组件接收到的context：
            <MyContext.Consumer>
                {value => <span>{value}</span>}
            </MyContext.Consumer>
        </div>
    )
}

export default D