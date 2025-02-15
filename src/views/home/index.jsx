import home from '@/assets/images/home_bg.png'
const Home = () => {
    return (
        <div className="h-full flex items-center">
            <div className="w-[70%] h-full m-[0_auto]">
                <img className='w-full' src={home} alt="" />
            </div>
        </div>
    )
}

export default Home;