import { CalendarOutlined, FolderOpenOutlined, LogoutOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const SideNav = () => {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    console.log(page);
    const links = [
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'User',
          path: ''
        },
        {
          key: '2',
          icon: <MailOutlined />,
          label: 'Question',
          path: 'question'
        },
        {
          key: '3',
          icon: <CalendarOutlined />,
          label: 'Geak Exam',
          path: 'geakexam'
        },
        {
          key: '4',
          icon: <FolderOpenOutlined />,
          label: 'Exam Management',
          path: 'exammanagement'
        },
        {
          key: '5',
          icon: <LogoutOutlined />,
          label: 'Log out',
          path: 'logout'
        },
      ]
  return (
    <Menu
          mode="inline"
          style={{ background: "#6674BB" }}
    >
        {links.map(link => {
            console.log(link.path);
            return(
                <Menu.Item key={link.key} className={page === link.path ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <NavLink to={link.path}>
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            {link.icon}
                        </span>
                        <span className="ant-menu-title-content">{link.label}</span>
                    </NavLink>
                </Menu.Item>
            )
        })}
    </Menu>
  )
}

export default SideNav