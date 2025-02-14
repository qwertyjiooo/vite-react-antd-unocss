
const accountIsTag = {
    isTag: true,
}

const reducer = (state, action) => {
    // 用于判断tab切换
    switch (action.type) {
        case 'accountIsTag':
            return {
                isTag: action.payload
            }
        case 'accountIsTagFalse':
            return {
                isTag: action.payload
            }
        default:
            return state
    }
}

export {
    accountIsTag,
    reducer
}