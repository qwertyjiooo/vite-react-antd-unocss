import { Select, Tooltip } from 'antd';
import { useState, useEffect } from 'react';
import { FullscreenOutlined, FullscreenExitOutlined, LogoutOutlined } from '@ant-design/icons';
import Setting from '@/layout/header/Setting';

const HeaderRight = () => {
    const [fullScreen, setFullScreen] = useState(false);
    useEffect(() => {
        if (fullScreen) {
            const element = document.documentElement;
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
            if (document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement ||
                document.msFullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }
    }, [fullScreen]);
    return (
        <div className='m-l-auto flex items-center p-r-2 text-[14px]'>
            <Select
                showSearch
                style={{
                    width: 300, maxHeight: '33px',
                    overflow: 'auto',
                }}
                placeholder="搜索菜单"
                optionFilterProp="label"
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                    {
                        value: '1',
                        label: '1',
                    },
                    {
                        value: '2',
                        label: '2',
                    },
                    {
                        value: '3',
                        label: '3',
                    },
                    {
                        value: '4',
                        label: '4',
                    },
                    {
                        value: '5',
                        label: '5',
                    },
                    {
                        value: '6',
                        label: '6',
                    },
                ]}
            />
            <Tooltip title={fullScreen ? "退出全屏" : "全屏显示"}>
                <span className='p-l-2 p-r-2 hover-bg-[rgb(0,0,0,0.025)]' onClick={() => setFullScreen(!fullScreen)}>
                    {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                </span>
            </Tooltip>
            {/* 后台设置 */}
            <Setting />
            <div className='flex items-center cursor-pointer transition-all hover:text-[var(--main-bg)] p-l-2 p-r-2'>
                <LogoutOutlined />
                <span>退出登录</span>
            </div>
        </div>
    )
}

export default HeaderRight