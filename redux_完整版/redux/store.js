import {createStore} from "redux";
import count_reducer from "./count_reducer"

const store = createStore(count_reducer)

export default store