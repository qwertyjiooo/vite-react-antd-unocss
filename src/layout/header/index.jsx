// import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
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
            </Header>
        </>
    )
}
Headers.propTypes = {
    dispatch: PropTypes.func,
    collapsed: PropTypes.bool,
}
export default Headers