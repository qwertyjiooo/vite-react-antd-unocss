import { useReducer } from 'react'
import Account from './account'
import CationCode from './cationCode'
import OtherLogin from './otherLogin'
import { reducer, accountIsTag } from '@/features/login/accountPassword'
const AccountPassword = () => {

    const [state, dispatch] = useReducer(reducer, accountIsTag)
    const spanStyle = {
        color: ' #409eff',
        pointerEvents: 'none'
    }
    return (
        <div className="w-[400px]">
            <div className='flex justify-center mb-[26px] text-[18px] color-[#505050]'>
                <span className='cursor-pointer color-[#505050] pointer-events-auto'
                    style={state.isTag ? spanStyle : {}}
                    onClick={() => dispatch({ type: 'accountIsTag', payload: true })}
                >密码登录</span>
                <span className='m-r-[20px] m-l-[20px] color-[#e3e5e7]'>|</span>
                <span className='cursor-pointer color-[#505050] pointer-events-auto'
                    style={!state.isTag ? spanStyle : {}}
                    onClick={() => dispatch({ type: 'accountIsTagFalse', payload: false })}
                >短信登录</span>
            </div>
            {/* 密码登录 */}
            <Account isTag={state.isTag} dispatch={dispatch} />
            {/* 短信验证码登录 */}
            <CationCode isTag={state.isTag} />
            {/* 其他登录方式 */}
            <OtherLogin />
        </div>
    )
}
export default AccountPassword