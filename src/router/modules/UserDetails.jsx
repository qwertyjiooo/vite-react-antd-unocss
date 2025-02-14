import { BankOutlined } from '@ant-design/icons';
import UserDetails from "@/views/UserDetails/UserDetails"
import Recommended from "@/views/UserDetails/Recommended"
import About from "@/views/about";

const UserDetailsRouter = [
    {
        path: '/details',
        element: '',
        meta: {
            title: '用户管理',
            showSidebar: true,
        },
        children: [
            {
                path: '/details/UserDetails',
                element: <UserDetails />,
                meta: {
                    title: '用户详情',
                    affix: true,
                    icon: BankOutlined,
                },
            },
            {
                path: '/details/Recommended',
                element: <Recommended />,
                meta: {
                    title: '推荐池',
                    affix: true,
                    icon: BankOutlined,
                },
            },
            {
                path: '/details/about',
                element: <About />,
                meta: {
                    title: '关于我们',
                    affix: true,
                    icon: BankOutlined,
                },
            },
        ]
    },
]
export default UserDetailsRouter
