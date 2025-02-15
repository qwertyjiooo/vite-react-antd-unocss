// import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import HeaderRight from './headerRight';
import PropTypes from 'prop-types';

const { Header } = Layout;
const Headers = ({ dispatch, collapsed }) => {
    // const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    borderBottom: '1px solid #f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => dispatch({ type: 'toggle' })}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
                <span className='text-[14px]'>欢迎登录***后台</span>
                {/* 右侧 */}
                <HeaderRight />
            </Header>
        </>
    )
}
Headers.propTypes = {
    dispatch: PropTypes.func,
    collapsed: PropTypes.bool,
}
export default Headers