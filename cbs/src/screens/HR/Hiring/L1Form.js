import { Form } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedBackForm } from '../../../components/FeedbackForm';

export const L1Form = () => {

  const [form] = Form.useForm();
  const naviagte = useNavigate();
  const onPreviousClick = () => {
    naviagte('/employeehiring')
  }
  //   const online = Form.useWatch('online', form);
  const onFinish = (values) => {
    console.log(values);
    naviagte('../l2');
  };
  return <FeedBackForm onFinish={onFinish} title={'L1 Round'} hasNext={true} onPreviousClick={onPreviousClick}/>;
};
