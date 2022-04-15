

const initState = [{name: 'tom', age: 1}]
function personReducer(preState = initState, action) {
    const {type, data} = action
    switch (type) {
        case 'addPerson' :
            return [...preState, data]
        default:
            return preState
    }
}

export default personReducer