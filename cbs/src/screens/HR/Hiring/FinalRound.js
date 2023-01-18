import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedBackForm } from '../../../components/FeedbackForm';
import { Form } from 'antd';

export const FinalRound = () => {
  const [form] = Form.useForm();
  const naviagte = useNavigate();
  const onPreviousClick = () => {
    naviagte('../l2')
  }
  //   const online = Form.useWatch('online', form);
  const onFinish = (values) => {
    console.log(values);
    naviagte('/onboarding');
  };
  return <FeedBackForm onFinish={onFinish} title={'Final Round'} hasNext={false} onPreviousClick={onPreviousClick} />;
};
