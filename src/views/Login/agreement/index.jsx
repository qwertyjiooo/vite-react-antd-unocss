
const Agreement = () => {
    return (
        <div className='absolute bottom-[30px] left-0 w-full text-[#999] text-[13px] flex flex-col items-center justify-center'>
            <span>未注册过哔哩哔哩的手机号，我们将自动帮你注册账号</span>
            <span>登录或完成注册即代表你同意
                <span className='color-[#409eff] cursor-pointer'> 用户协议 </span>
                和
                <span className='color-[#409eff] cursor-pointer'> 隐私政策</span>
            </span>
        </div>
    )
}

export default Agreement