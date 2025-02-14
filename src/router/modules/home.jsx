import Home from "@/views/home"
import { BankOutlined } from '@ant-design/icons';

const homeRouter = [
    {
        path: '/home',
        element: <Home />,
        meta: {
            title: '首页',
            affix: true,
            icon: BankOutlined,
        },
    },
]
export default homeRouter