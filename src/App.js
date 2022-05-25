import React, {Component} from 'react';
import Count from "./container/count/count";
import Person from "./container/person/person";
import {Button} from "antd";
import './App.less';
import A from "./componets/context_demo/A";

class App extends Component {

    componentDidMount() {

    }

    getData = async () => {
        let p = new Promise( (resolve, rejcet) => {
            console.log(1)
            setTimeout(()=> {
                console.log(2)
                resolve({name:'jack',age: 18})
            },2000)
        })
        let a = await p
        console.log(3)
        console.log(a)
    }

    render() {
        return (
            <div>
                <Count/>
                <Person/>
                <Button type="primary" onClick={this.concat}>Primary Button</Button>
                <A/>
            </div>
        );
    }
}

export default App;