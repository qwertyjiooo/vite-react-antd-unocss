import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';
import routes from "@/router/routes"
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Logo from './Logo';

// Sider 侧边栏
const { Sider } = Layout;

const Aside = ({ collapsed }) => {
    // 背景色
    const { token: { colorBgContainer } } = theme.useToken();
    
    // 创建菜单项 使其符合 antd menu 组件的格式
    const createMenuItem = (item, children) => ({
        key: item.path,
        icon: item.meta.icon ? React.createElement(item.meta.icon) : <LaptopOutlined />,
        label: item.meta.title,
        ...(children ? { children: children.map(child => createMenuItem(child)) } : {}),
    });
    const menuItems = () => {
        return routes
            .filter(item => item.meta.showSidebar)
            .reduce((acc, item) => {
                // 如果有子菜单项，遍历它们
                if (item.children) {
                    item.children.forEach(child => {
                        if (child.children) {
                            acc.push(createMenuItem(child, child.children));
                        } else {
                            acc.push(createMenuItem(child));
                        }
                    });
                } else {
                    // 如果没有子菜单项，直接添加主菜单项
                    acc.push(createMenuItem(item));
                }
                return acc;
            }, []);
    };
    const menuProps = menuItems();

    // 点击菜单项
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key);
    };

    // 获取默认展开的菜单项-父项
    const getDefaultOpenKeys = (pathname) => {
        for (const item of menuProps) {
            // 如果是没有子项的父项
            if (item.key === pathname) {
                return [item.key];
            }
            // 如果有子项，检查子项
            if (item.children) {
                const matchedChild = item.children.find(child => child.key === pathname);
                if (matchedChild) {
                    return [item.key];  // 找到匹配的子项，返回父项的 key
                }
            }
        }
        return [];  // 如果没有匹配项，返回一个空数组
    };

    // 当前路由
    const location = useLocation();
    const defaultOpenKeys = getDefaultOpenKeys(location.pathname);

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: colorBgContainer, borderRight: '1px solid #f0f0f0', boxSizing: 'border-box' }}>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                    trigger={null} collapsible collapsed={collapsed}
                >
                    <Logo />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[location.pathname]}
                        defaultOpenKeys={collapsed ? [] : defaultOpenKeys} // 设置动态的父级路径
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menuProps}
                        onClick={onClick}
                    />
                </Sider>
            </div>
        </>
    );
};

Aside.propTypes = {
    collapsed: PropTypes.bool.isRequired,
}
export default Aside;
