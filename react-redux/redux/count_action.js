/**
 * 改文件专门为  count 组件生成 action 对象
 */
import store from "./store";

// 同步action 返回 object
export const incrementAction = data => ({type: 'increment', data})
export const decrementAction = data => ({type: 'decrement', data})

//异步action 返回一个函数, 给store的回调， 传入参数 dispatch
export const incrementAsyncAction = (data, time )=> {
    return dispatch => {
        setTimeout(()=> {
            //自己单独写
            // dispatch({type: 'increment', data})
            //直接调用写好的同步 action
            dispatch(incrementAction(data))
        }, time)
    }
}