// aside 展开收起
// 获取 存储的 collapsed 状态
const getCollapsed = () => {
    return JSON.parse(localStorage.getItem('demoq_collapsed') || 'false');
};

const initialState = {
    collapsed: getCollapsed() || false, // 控制 Sider 是否收起
};
// 定义 reducer
function reducer(state, action) {
    switch (action.type) {
        case 'toggle':
            localStorage.setItem('demoq_collapsed', JSON.stringify(!state.collapsed));
            return { collapsed: !state.collapsed };
        default:
            return state;
    }
}

export { initialState, reducer };