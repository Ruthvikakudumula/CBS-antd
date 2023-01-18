import {
  BookOutlined,
  DollarOutlined,
  FundProjectionScreenOutlined,
  LaptopOutlined,
  LockOutlined,
  MoneyCollectOutlined,
  ProfileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Col, Image, Layout, Menu, Row, Space, Typography } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Profile } from '../components/Profile';
const { Header, Content, Sider } = Layout;
const Container = styled.div`
  margin: 30px;
`;

const Home = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const onMenuItemSelect = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    console.log(item);
    navigate(`/${key}`);
  };
  return (
    <Layout>
      <Header>
        <Row fluid={'true'} justify={'space-between'}>
          <Col span={12}>
            <Space>
              <Image width={32} height={32} src="./logo192.png" />
              <Typography.Text style={{ color: 'white' }}>Codex</Typography.Text>
            </Space>
          </Col>
          <Col span={12}>
            <Row fluid={'true'} justify={'end'}>
              <Col>
                <Profile />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
      <Layout style={{ height: 'calc(100vh - 64px)' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu
            onSelect={onMenuItemSelect}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              { key: 'hr', label: 'HR', icon: <TeamOutlined />, children: [
                  {
                      key: 'employeehiring',
                      label:'Employee Hiring'
                  },
                    {
                      key: 'onboarding',
                      label:'Employee Onboarding'
                  }
              ] },
              { key: 'admin', label: 'Admin', icon: <LockOutlined /> },
              { key: 'finance', label: 'Finance', icon: <BookOutlined /> },
              { key: 'it', label: 'IT', icon: <LaptopOutlined /> },
              { key: 'sales', label: 'Sales', icon: <DollarOutlined /> },
            ]}
          />
        </Sider>
        <Content style={{ margin: 30 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
