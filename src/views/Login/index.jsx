import ScanCode from './scanCode/index'
import AccountPassword from './accountPassword'
import Agreement from './agreement'
import './index.scss'

const Login = () => {
  return (
    <div className="content">
      <div className="Login_header">
        <div className="Login_container">
          {/* 扫码登录 */}
          <ScanCode />
          {/* 中间占位竖线 */}
          <div className="line"></div>
          {/* 账号密码登录 */}
          <AccountPassword />
          <Agreement />
        </div>
      </div>
    </div>
  )
}
export default Login