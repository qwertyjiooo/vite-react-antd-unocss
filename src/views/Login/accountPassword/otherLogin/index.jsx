import weiXin from '@/assets/images/wei_xin.png'
import qq from '@/assets/images/qq.png'
import weiBo from '@/assets/images/wei_bo.png'
import { message } from 'antd'

const List = [
    {
        name: '微信登陆',
        icon: weiXin
    },
    {
        name: 'QQ登陆',
        icon: qq
    },
    {
        name: '微博登陆',
        icon: weiBo
    },
]

const OtherLogin = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: '功能开发中...',
        })
    }

    return (
        <>
            {contextHolder}
            <div className="flex flex-col items-center justify-center m-t-[24px] text-[13px] text-[#9499a0]">
                <div>其他登录方式</div>
                <div className="flex m-t-[12px]">
                    {List.map((item, index) => (<div key={index} className="flex items-center m-r-[30px] cursor-pointer" onClick={warning}>
                        {item.icon && <img src={item.icon} alt={item.name} className='w-[28px] h-[28px] m-r-[8px]' />}
                        <p>{item.name}</p>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default OtherLogin