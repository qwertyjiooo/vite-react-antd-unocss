import { Outlet } from "react-router-dom";
import { Layout,theme } from 'antd';
const { Content } = Layout;

const Main = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <>
            <Content
                style={{
                    height: 'calc(100vh - 64px)',
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </Content>
        </>
    )
}

export default Main