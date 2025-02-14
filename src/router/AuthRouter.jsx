import { util } from '@/utils'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const { getToken } = util
const AuthRouter = ({ children }) => {
    const navigator = useNavigate()
    useEffect(() => {
        try {
            const token = getToken()
            if (!token) {
                navigator(`/login`);
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            navigator(`/login`);
            // console.log(error)
        }
    }, [navigator])
    return <>{children}</>
}
AuthRouter.propTypes = {
    children: PropTypes.element.isRequired,
}

export default AuthRouter