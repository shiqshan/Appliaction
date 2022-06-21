import React, {Component} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import {Layout} from "antd";

const {Header} = Layout

class MyHeader extends Component {
    state = {
        collapsed: false
    }

    render() {
        const {collapsed} = this.state
        return (
            <>
                <Header className="site-layout-background">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => this.setState({collapsed: !collapsed}),
                    })}
                </Header>
            </>
        );
    }
}

export default MyHeader;