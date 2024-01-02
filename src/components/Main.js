import React, { Children, useState } from 'react';
import {
  BellOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Typography, Space, Badge, Avatar } from 'antd';
import SideNav from './SideNav';
const { Header, Sider, Content } = Layout;
const Main = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='min-h-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}
        style={{ background: "#6674BB" }}

      >
        <div className="demo-logo-vertical" />
        <div className='h-16'>
          {!collapsed &&
              <Typography.Title level={3} className="text-center mt-4">Bank Question</Typography.Title>
          }
        </div>
        <SideNav></SideNav>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "white",
          }}
        >
          <div className='flex justify-between'>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className='flex items-center justify-center gap-4 pr-10'>
            <Badge count={1}>
              <BellOutlined
                style={{
                  fontSize: '20px',
                }}
              />
            </Badge>
            <Avatar src="https://i.pinimg.com/736x/a9/62/ef/a962ef5ea8dfa25418c0a2b0057a64d4.jpg" />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: "#e5eaff",
            borderRadius: "12px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;