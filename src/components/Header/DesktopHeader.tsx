import React, { useState } from 'react';
import { Menu } from 'antd';
import {
  TranslationOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  OrderedListOutlined,
  BarChartOutlined,
  MailOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { Layout } from 'antd';

type Props = {};

function DesktopHeader({}: Props) {
  const { Header, Content, Footer } = Layout;
  const { SubMenu } = Menu;

  const [current, setCurrent] = useState('');

  const handleClick = () => {
    setCurrent(current);
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" onClick={handleClick} selectedKeys={[current]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="list" icon={<OrderedListOutlined />}>
          <Link href="/list">
            <a>List</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="video" icon={<VideoCameraOutlined />}>
          <Link href="/video">
            <a>Video</a>
          </Link>
        </Menu.Item>

        <SubMenu key="SubMenu2" icon={<BarChartOutlined />} title="Chart">
          <Menu.ItemGroup title="Where">
            <Menu.Item key="setting:1">Country</Menu.Item>
            <Menu.Item key="setting:2">City</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Who">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        <Menu.Item key="contact" icon={<MailOutlined />} title="Contacnt">
          <Link href="/contact">
            <a target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Menu.Item>

        <Menu.Item key="Logout" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>

        <Menu.Item key="register" icon={<UserAddOutlined />}>
          <Link href="/signup">
            <a>Register</a>
          </Link>
        </Menu.Item>

        <SubMenu key="SubMenu1" icon={<TranslationOutlined />} title="Language">
          <Menu.Item key="english">English</Menu.Item>
          <Menu.Item key="korean">Korean</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default DesktopHeader;
