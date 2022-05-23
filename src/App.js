import React, {Component} from 'react';
import Count from "./container/count/count";
import Person from "./container/person/person";
import {Button} from "antd";
import './App.less';

class App extends Component {

    componentDidMount() {
        let arr = [1, 2, 3, 3, 2, 5, 6, 6, 6, 8]
        let str = '12333'
        var name = '是的'
        // let arr2 = new Set(arr)
        // console.log(Array.isArray(1))
        // this.getData()
        // console.log(parseInt(str), name, window.name)
        for (var i = 0; i < 5; i++) {
            console.log(i)
        }
        this.testArguements(arr, str, name,1,2,3)
        this.testArguements2(arr, str, name,1,2,3)
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

    testArguements (a,b) {
        console.log(arguments)
    }

    testArguements2  = (a,b,...rest) => {
        console.log(a,b,rest)
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