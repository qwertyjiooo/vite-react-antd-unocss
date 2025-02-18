import { util } from '@/utils'
import { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const { getToken } = util
const AuthRouter = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigator = useNavigate()

    useEffect(() => {
        const token = getToken()
        if (!token) {
            setIsAuthenticated(false);
            navigator(`/login`);
        } else {
            setIsAuthenticated(true);
        }
    }, [navigator])

    // 通过状态判断是否渲染子路由
    if (isAuthenticated === null) {
        return null; // 等待判断完token
    }

    if (isAuthenticated === false) {
        return <Navigate to="/login" />; // 跳转到登录页
    }

    return <>{children}</>; // 允许渲染子组件
}

AuthRouter.propTypes = {
    children: PropTypes.element.isRequired,
}

export default AuthRouter
