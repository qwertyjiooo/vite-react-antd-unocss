import Login from "@/views/login/index";

const loginRouter = [{
    path: '/login',
    element: <Login />,
    meta: {
        title: '登录',
        showSidebar: false,
    }
}]
export default loginRouter