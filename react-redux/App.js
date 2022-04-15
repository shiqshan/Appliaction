import React, {Component} from 'react';
import Count from "./container/count";
import store from "./redux/store";

class App extends Component {

    componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        );
    }
}

export default App;