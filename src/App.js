import React, {Component} from 'react';
import Count from "./container/count/count";
import Person from "./container/person/person";
import {Button} from "antd";
import './App.less';

class App extends Component {

    concat = () => {

    }

    render() {
        return (
            <div>
                <Count/>
                <Person/>
                <Button type="primary" onClick={this.concat}>Primary Button</Button>
            </div>
        );
    }
}

export default App;