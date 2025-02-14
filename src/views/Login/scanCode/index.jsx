
import scanCode from '@/assets/images/scanCode.png'
const ScanCode = () => {
    return (
        <div className="flex flex-col items-center">
            <div className='text-[18px] color-[#505050] mb-[26px]'>扫描二维码登录</div>
            <div className='w-[160px] h-[160px] bg-gray-300 border-[1px] border-gray-400 rounded-lg'>
                <img src={scanCode} alt="" className='w-full h-full object-cover rounded-lg p-[1px] box-border'/>
            </div>
            <div className='flex flex-col items-center text-[13px] color-[#505050] mt-[10px]'>
                <span>请使用 <span className='color-[#409eff] cursor-pointer'>格致APP</span></span>
                <span>扫码登录或者扫码下载APP</span>
            </div>
        </div>
    )
}
export default ScanCode