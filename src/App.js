import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MailOutlined
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';
import './App.less'
import {Link, Route, Routes} from "react-router-dom";
import Home from "./componets/home/home";
import About from "./componets/about/about";

const {Header, Sider, Content} = Layout;
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
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout className={'app-layout'} id={'components-layout-demo-custom-trigger'}>
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
            <Layout className="site-layout">
                <Header className="site-layout-background">
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content className="site-layout-background" style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
                >
                    <Routes>
                        <Route path={'/nav_1'} element={<Home/>}></Route>
                        <Route path={'/nav_2'} element={<About/>}></Route>
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;