import {createStore, applyMiddleware} from "redux";
import count_reducer from "./count_reducer"

//引入thunk ，用于支持 异步action
import thunk from 'redux-thunk'

const store = createStore(count_reducer, applyMiddleware(thunk))

export default store