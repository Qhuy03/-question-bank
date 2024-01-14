import React from 'react'
import { Button, Card, Input, Typography } from "antd";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleClickout = () => {
    navigate('/');
  }
  return ( 
    <div className="bg-[#e5eaff] min-h-lvh flex items-center justify-center">
      <Card className="min-w-[550px]" title={<ArrowLeftOutlined onClick={handleClickout} style={{ color: '#3182CE', fontSize: '28px', cursor: 'pointer' }}/>}>
        <Typography.Title level={1} className="text-center">
          FORGOT PASSWORD
        </Typography.Title>
        <div className="mb-4">
          <Typography.Title level={5}>Email</Typography.Title>
          <Input placeholder={"Email"} />
        </div>
        
        <Button className="bg-[#6674BB] w-full text-white mt-8" size="large">
          Confirm
        </Button>  
      </Card>
    </div>
  )
}

export default ForgotPassword