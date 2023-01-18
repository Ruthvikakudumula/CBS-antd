import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedBackForm } from '../../../components/FeedbackForm';
import { Form } from 'antd';

export const L2Form = () => {
  const [form] = Form.useForm();
  const naviagte = useNavigate();
  const onPreviousClick = () => {
    naviagte('../l1')
  }
  //   const online = Form.useWatch('online', form);
  const onFinish = (values) => {
    console.log(values);
    naviagte('../final');
  };
  return <FeedBackForm onFinish={onFinish} title={'L2 Round'} hasNext={true} onPreviousClick={onPreviousClick} />;
};
