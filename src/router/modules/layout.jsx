import { Navigate } from 'react-router-dom';
import Layouts from "@/layout/index"
import homeRouter from './home'; // 首页
import UserDetailsRouter from './UserDetails'; // 用户详情
import AuthRouter from '../AuthRouter';

const layoutRoutes = [
    {
        path: '/',
        element: <Navigate to="/home" />,
        meta: {
            showSidebar: false,
        },
    },
    {
        path: '/',
        element: <AuthRouter><Layouts /></AuthRouter>,
        meta: {
            title: '首页',
            showSidebar: true,
        },
        children: [
            ...homeRouter, // 首页
            ...UserDetailsRouter, // 用户详情
        ]
    },
]

export default layoutRoutes