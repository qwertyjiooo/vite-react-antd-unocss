import { useState } from 'react';
import { Tooltip, Drawer, Divider, Switch, Tag } from 'antd';
import { SettingOutlined, CheckOutlined } from '@ant-design/icons';
import { colorList } from './data';
import './index.scss'
import  useBearStore  from '@/store';

const Setting = () => {
    const [open, setOpen] = useState(false);
    // let [darkChecked, setDarkChecked] = useState(false)
    let [grayChecked, setGrayChecked] = useState(false)
    let [weakChecked, setWeakChecked] = useState(false)
    let [bgCheck, setBgCheck] = useState('#1890ff')
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    // 主题颜色切换
    const changeColor = (item) => { 
        setBgCheck(item)
    }
    const { bears, increasePopulation } = useBearStore();

    return (
        <>
            <Tooltip title='后台设置'>
                <span className='p-l-2 p-r-2 hover-bg-[rgb(0,0,0,0.025)]' onClick={showDrawer}>
                    <SettingOutlined spin />
                </span>
            </Tooltip>
            <Drawer width={460} placement="right" closable={false} onClose={onClose} open={open}>
                <Divider>模式设置</Divider>
                <div className="flex items-center justify-between m-[25px_0]">
                    <span>深夜模式</span>
                    <Switch checked={bears == 'black'} checkedChildren="开启" unCheckedChildren="关闭" onChange={() => {
                        increasePopulation()
                    }} />
                </div>
                <div className="flex items-center justify-between m-[25px_0]">
                    <span>灰色模式</span>
                    <Switch checked={grayChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => setGrayChecked(e)} />
                </div>
                <div className="flex items-center justify-between m-[25px_0]">
                    <span>色弱模式</span>
                    <Switch checked={weakChecked} checkedChildren="开启" unCheckedChildren="关闭" onChange={e => setWeakChecked(e)} />
                </div>
                <Divider>主题颜色</Divider>
                <div className='theme_bgd'>
                    {
                        colorList.map((item, index) => {
                            return (
                                <Tooltip title={item.key} key={index}>
                                    <Tag color={item.color} onClick={() => changeColor(item.color)}>
                                        {bgCheck == item.color ? < CheckOutlined /> : ""}
                                    </Tag>
                                </Tooltip>
                            )
                        })
                    }
                </div>
            </Drawer>
        </>
    );
};

export default Setting;