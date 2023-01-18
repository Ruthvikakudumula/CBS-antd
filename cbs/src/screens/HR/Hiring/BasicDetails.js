import { Button, Col, Input, Row, Select, Form, Typography } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
export const BasicDetails = () => {
  const [form] = Form.useForm();
  const naviagte = useNavigate();
  //   const online = Form.useWatch('online', form);
  const onFinish = (values) => {
    console.log(values);
    naviagte('./l1');
  };
  return (
    <div className="form-container">
      <Typography.Title level={5}>Basic</Typography.Title>
      <Form
        {...formItemLayout}
        initialValues={{ mode: 'offline', profile_source: 'Naukri' }}
        form={form}
        style={{ width: 500 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="Name"
            rules={[
              {
                required: true,
                message: 'Please input Name!',
              },
            ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          //   rules={[
          //     {
          //       required: true,
          //       message: 'Please select gender!',
          //     },
          //   ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          //   rules={[
          //     {
          //       required: true,
          //       message: 'Please input your phone number!',
          //     },
          //   ]}
        >
          <Input
            style={{
              width: '100%',
            }}
          />
        </Form.Item>
        <FormItem name="profile_source" label="Source">
          <Select
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'Naukri',
                label: 'Naukri',
              },
              {
                value: 'LinkedIn',
                label: 'LinkedIn',
              },
            ]}
          />
        </FormItem>
        <FormItem name="mode" label="Mode of interview">
          <Select
            style={{
              width: 120,
            }}
            options={[
              {
                value: 'zoom',
                label: 'Zoom',
              },
              {
                value: 'gmeet',
                label: 'Google meet',
              },
              {
                value: 'offline',
                label: 'Offline',
              },
            ]}
          />
        </FormItem>

        <Row justify={'end'}>
          <Col>
            <FormItem justify={'end'}>
              <Button type="primary" htmlType="submit">
                Submit & Next
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
