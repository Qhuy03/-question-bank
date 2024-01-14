import { CalendarOutlined, FolderOpenOutlined, LogoutOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, {useState} from 'react'
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SideNav = () => {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    console.log(page);
    const navigate = new useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

      const handleLogin = async () => {
        try {
          const userData = {
            user_data: {
              email: email,
              password: password
            }
          };
          console.log(JSON.parse(localStorage.getItem('metadata')));
          const response = await axios.post('http://localhost:8000/api/v1/access/logout', userData, {
            headers: {
              'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('metadata')).authToken.refreshToken
            }
          });
    
          // Nếu đăng nhập thành công, xử lý token hoặc thông tin cần thiết ở đây
          // const token = response.data.token;
          console.log('Login successful! Token:', response);
          localStorage.removeItem("metadata");
          // Điều hướng hoặc lưu token vào state của ứng dụng (tùy vào yêu cầu của bạn)
          navigate('/');
        } catch (error) {
          // Xử lý lỗi nếu đăng nhập thất bại
          // setError('Invalid username or password');
          console.error('Error during login:', error);
        }
      };

  return (
    <Menu
          mode="inline"
          style={{ background: "#6674BB" }}
    >
         <Menu.Item  className={page === '' ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <Link to={'/'} replace>
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            <UserOutlined />
                        </span>
                        <span className="ant-menu-title-content">User</span>
                    </Link>
                </Menu.Item>

                <Menu.Item  className={page === 'question' ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <Link to={'/question'} replace>
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            <MailOutlined />
                        </span>
                        <span className="ant-menu-title-content">Question</span>
                    </Link>
                </Menu.Item>

                <Menu.Item  className={page === 'geakexam' ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <Link to={'/geakexam'} replace>
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            <CalendarOutlined />
                        </span>
                        <span className="ant-menu-title-content">Geak Exam</span>
                    </Link>
                </Menu.Item>

                <Menu.Item  className={page === 'exammanagement' ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <Link to={'/exammanagement'} replace>
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            <FolderOpenOutlined />
                        </span>
                        <span className="ant-menu-title-content">Exam Management</span>
                    </Link>
                </Menu.Item>

                <Menu.Item  className={page === 'logout' ? 'ant-menu-item-active ant-menu-item-selected' : ""}>
                    <div >
                        <span
                        className="anticon anticon-user ant-menu-item-icon"
                        role='img'
                        aria-label='user'
                        >
                            <LogoutOutlined onClick={handleLogin}  />
                        </span>
                        <span className="ant-menu-title-content">Log out</span>
                    </div>
                </Menu.Item>
    </Menu>
  )
}

export default SideNav