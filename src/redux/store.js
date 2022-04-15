import {createStore, applyMiddleware, combineReducers} from "redux";
import count_reducer from "./count_reducer"
import person_reducer from "./person_reducer"

//引入thunk ，用于支持 异步action
import thunk from 'redux-thunk'

const allReducers = combineReducers(
    {
        sum: count_reducer,
        person: person_reducer
    }
)
const store = createStore(allReducers, applyMiddleware(thunk))

export default store