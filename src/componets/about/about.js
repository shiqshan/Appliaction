import React, {Component} from 'react';

class About extends Component {

    state = {
        count: 0
    }

    handle = (e) => {
        e.
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
        this.setState({count: this.state.count + 1})
        console.log(e)
    }

    render() {
        return (
            <div>
                {/* <span>行元素</span>*/}
                {/*<div className={'kkk'}>*/}
                {/*    <div className={'hhh'}></div>*/}
                {/*</div>*/}
                {/*<div className={'fixed'}></div>*/}
                <div className={'kkk'} onClick={ e=> this.handle}>
                    <div className={'hhh'} onClick={e => {
                        // e.stopPropagation()
                        console.log('我是里面的')
                    }}></div>
                </div>
            </div>
        );
    }
}

export default About;