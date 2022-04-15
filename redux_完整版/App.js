import React, {Component} from 'react';
import Count from "./componets/count/count";
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
                <Count/>
            </div>
        );
    }
}

export default App;