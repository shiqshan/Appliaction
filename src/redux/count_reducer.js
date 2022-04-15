/**
 * 初始化state， 加工state，返回新的 state
 */
const initState = 0
function countReducer (preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}
export default countReducer