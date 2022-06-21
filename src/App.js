import React, {Component} from 'react';
import './App.less'
import {Navigate, Route, Routes} from "react-router-dom";
import Index from "./layout/index";

class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/*" element={<Index/>}/>
                    <Route exact path="/" render={() => (< Navigate to="/index"/>)}></Route>
                </Routes>
            </>
        );
    }

};

export default App;