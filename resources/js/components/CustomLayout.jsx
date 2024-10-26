// CustomLayout.jsx
import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const bgMenu = "#ddd6fe";
const bgMenuItem = "#c4b5fd";
const CustomLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ backgroundColor: bgMenu }}
            >
                <div
                    className="cursor-pointer h-[4rem] flex justify-center items-center"
                    onClick={() => navigate("/")}
                >
                    <img
                        src="/img/logo_ngang.png"
                        alt=""
                        className="drop-shadow-lg"
                    />
                </div>
                <style>
                    {`
                    .ant-menu-item{
                        color: #333 !important;
                    }
                    .ant-menu-item-selected {
                        background-color: ${bgMenuItem} !important; /* Màu nền cho item đang chọn */
                    }
                    .ant-menu-item:hover {
                        background-color: ${bgMenuItem} !important; /* Màu nền cho item khi hover */
                    }`}
                </style>
                <Menu
                    className="h-full"
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "nav 1",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "nav 2",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "nav 3",
                        },
                    ]}
                    style={{ backgroundColor: bgMenu }}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: "16px",
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        margin: 8,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
