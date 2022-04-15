// 容器组件，引入 ui组件
import CountUI from '../../componets/count/count'

import {connect} from "react-redux";
import {decrementAction, incrementAction, incrementAsyncAction} from "../../redux/count_action";

//该函数 返回值作为state 传递给 ui组件
function mapStateToProps(state) {
    return {count:state}
}

function mapDispatchToProps(dispatch) {
    return {
        increment: number => dispatch(incrementAction(number)),  //通知redux 执行
        decrement: number => dispatch(decrementAction(number)),
        incrementAsync: (number, time)=> dispatch(incrementAsyncAction(number,time)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
