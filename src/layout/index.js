import React, {Component} from 'react';
import {Layout} from "antd";
import MySider from "./sider";
import Header from "./header";
import {Route, Routes} from "react-router-dom";
import Home from "../componets/home/home";
import About from "../componets/about/about";
import TSDemo from "../pages/tsdemo/demo.tsx";

const {Content} = Layout
class Index extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Layout className={'app-layout'} id={'components-layout-demo-custom-trigger'}>
                <MySider/>
                <Layout className="site-layout">
                    <Header/>
                    <Content className="site-layout-background wx-content" style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                    >
                        <Routes>
                            <Route path={'/nav_1'} element={<Home/>}></Route>
                            <Route path={'/nav_2'} element={<About/>}></Route>
                            <Route path={'/nav_3'} element={<TSDemo/>}></Route>
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Index;