import {useState} from 'react';
import {Button} from "antd";

const TSDemo: React.FC = (props) => {
    const [data, setData] = useState([]);

    const x = (): string => {
        return 'string'
    }

    function y(): number {
        return 2
    }

    function getNum(x: number, y: number, r: Array<object>): number {
        return x + y
    }

    console.log(getNum(2,2,[{name: '1'}]))

    interface Person {
        firstName:string,
        lastName:string,
        sayHi: () => number
    }

    let temp: Person = {
        firstName:'string',
        lastName:'string',
        sayHi: ()=>2
    }


    return (
        <>
            <Button type="primary">Primary Button</Button>
        </>
    )
};

export default TSDemo;