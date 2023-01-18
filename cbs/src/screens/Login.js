import { Button, Form, Input, Spin, Row, Col, Space, Image, Typography } from 'antd';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-image: url('./assets/login-background.svg');
  & .login-container {
    .link {
      line-height: 24px;
      color: rgba(3, 63, 135, 1);
      cursor: pointer;
    }
    & .login-left {
      padding: 48px;
      background: rgba(233, 242, 253, 0.83);
    }
    & .login-right {
      padding: 48px;
      background: white;
      & .login-form {
        & .ant-form-item {
          width: 280px;
        }
      }
    }
  }
`;
const FormItem = Form.Item;
export const Login = () => {
  const naviagte = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const login = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:4000/signIn', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((res) => res.json());
      console.log(response);
      if (response.message === 'sucess') {
        localStorage.setItem('token', response.token);
        setUser(response.user);
        setTimeout(() => {
          naviagte('/');
        }, 100);
      } else {
        alert(response.statusText);
      }
    } catch (error) {}

    setLoading(false);
  };
  return (
    <Container>
      <Row className="login-container" fluid={'true'}>
        <Col className="login-left" span={13}>
          <Row style={{ height: '100%' }} justify={'center'} align="middle">
            <Space size={12} direction="vertical">
              <Image width={280} preview={false} src="./assets/login-codex-logo.svg"></Image>
              <Image width={320} preview={false} src="./assets/login-persons.svg"></Image>
            </Space>
          </Row>
        </Col>
        <Col className="login-right" span={11}>
          <Row fluid={'true'} style={{ height: '100%' }} justify={'center'} align={'middle'}>
            <Space size={36} direction="vertical">
              <Image preview={false} src="./assets/login-logo-top.svg"></Image>
              <Typography.Title level={3}>Login</Typography.Title>
              <FormContainer>
                {loading ? (
                  <Spin spinning={loading} />
                ) : (
                  <Form style={{ minWidth: 300 }} onFinish={login} name="login-form">
                    <FormItem name="username">
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        style={{borderRadius:20}}
                      />
                    </FormItem>
                    <FormItem name="password">
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        style={{borderRadius:20}}
                      />
                    </FormItem>
                    <FormItem>
                      <Row justify={'center'}>
                        <Button style={{ width: 180 }} type="primary" htmlType="submit">
                          Login
                        </Button>
                      </Row>
                    </FormItem>
                  </Form>
                )}
                {/* <Space> */}
                <span>
                  <span className="link">Forgot password?</span> <br />
                </span>
                <span>
                  <span> or </span>
                  <span className="link">Signup</span>
                </span>
                {/* </Space> */}
              </FormContainer>
            </Space>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
