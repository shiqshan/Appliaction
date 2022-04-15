import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPersonAction} from "../../redux/person_action";

class Person extends Component {

    add = () => {
        let name = this.nameRef.value
        let age = this.ageRef.value
        let personObj = {name, age}
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h1>Person组件，当前人数为：{this.props.person.length}</h1>
                <h2>上方求和为： {this.props.sum}</h2>
                <input ref={r => this.nameRef = r} placeholder={'输入名字'} defaultValue={'jerry'}/>
                &nbsp;
                <input ref={r => this.ageRef = r} placeholder={'输入年龄'} defaultValue={'18'}/>
                &nbsp;
                <button onClick={this.add}>加一个人</button>
                {
                    this.props.person.map( (item, index) => {
                        return (
                            <ul key={index}>
                                <li>{item.name}------{item.age}</li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({person: state.person, sum: state.sum})
}

function mapDispatchToProps(dispatch) {
    return ({
        addPerson: obj => dispatch(addPersonAction(obj))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);