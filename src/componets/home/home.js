import {Avatar, Button, List, Skeleton} from 'antd';
import React, {useEffect, useState} from 'react';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Home = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [height, setHeight] = useState(0) //滚动条距离底部的距离
    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    useEffect(() => {
        if (list.length > 3) {
            let scroll = document.getElementById('im-words');
            scroll.scrollTop = scroll.scrollHeight - height
        }
    }, [list.length]);

    const onLoadMore = () => {

        let scroll = document.getElementById('im-words');
        let clientHeight = scroll.clientHeight  // 可视区域
        let scrollTop = scroll.scrollTop  //当前位置 最上面0
        let scrollHeight = scroll.scrollHeight //总高
        //在元素塞进去之前  获取 height =  元素.scrollHeight - 元素.scrollTop  就是获取与底部的距离
        let height = scrollHeight - scrollTop //与底部的距离
        setHeight(height)

        setLoading(true);
        setList(
            [...[...new Array(count)].map(() => ({
                loading: true,
                name: {},
                picture: {},
            })), ...data]
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = [...res.results, ...data];
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };


    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;
    return (
        <>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
            <List
                className="demo-loadmore-list"
                id={'im-words'}
                loading={initLoading}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large}/>}
                                title={<a href="https://ant.design">{item.name?.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </>
    );
};

export default Home;