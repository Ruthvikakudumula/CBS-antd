import { Select, Typography } from 'antd';
import Form from 'antd/es/form/Form';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

export const EmployeeHiring = () => {
  return (
    <Container>
      <Typography.Title level={4}>Employee Hiring</Typography.Title>
      <Outlet></Outlet>
    </Container>
  );
};
