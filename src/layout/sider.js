import React, {Component} from 'react';
import {Menu, Layout} from "antd";
import {Link} from "react-router-dom";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

const {Sider} = Layout
const items = [
    {
        key: '1',
        icon: <UserOutlined/>,
        label: 'nav 1',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined/>,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined/>,
        label: 'nav 3',
    },
]

class MySider extends Component {

    state = {
        collapsed: false
    }

    render() {
        const {collapsed} = this.state
        return (
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo"/>
                <Menu
                    theme={'dark'}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                >
                    <>

                        <Menu.Item key={items[0].key}>
                            <Link to={'/nav_1'}>
                                {items[0].icon}
                                <span className={'app-menue-text'}>{items[0].label}</span>
                            </Link>
                        </Menu.Item>


                        <Menu.Item key={items[1].key}>
                            <Link to={'/nav_2'}>
                                {items[1].icon}
                                <span className={'app-menue-text'}>{items[1].label}</span>
                            </Link>
                        </Menu.Item>


                        <Menu.Item key={items[2].key}>
                            <Link to={'/nav_3'}>
                                {items[2].icon}
                                <span className={'app-menue-text'}>{items[2].label}</span>
                            </Link>
                        </Menu.Item>

                    </>
                </Menu>
            </Sider>
        );
    }
}

export default MySider;