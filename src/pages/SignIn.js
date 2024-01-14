import React, { useState, useEffect } from "react";
import { Button, Card, Input, Typography } from "antd";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = new useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if(localStorage.getItem('metadata')){
      navigate('/')
    }
  }, [])
  

  const handleLogin = async () => {
    try {
      const userData = {
        user_data: {
          email: email,
          password: password
        }
      };
      const response = await axios.post('http://localhost:8000/api/v1/access/login', userData);

      // Nếu đăng nhập thành công, xử lý token hoặc thông tin cần thiết ở đây
      // const token = response.data.token;
      console.log('Login successful! Token:', response);
      localStorage.setItem('metadata',JSON.stringify(response.data.metadata));
      // Điều hướng hoặc lưu token vào state của ứng dụng (tùy vào yêu cầu của bạn)
      navigate('/');
    } catch (error) {
      // Xử lý lỗi nếu đăng nhập thất bại
      // setError('Invalid username or password');
      alert("Sai tài khoản hoặc mật khẩu!");
      console.error('Error during login:', error);
    }
  };


  return (
    <div className="bg-[#e5eaff] min-h-lvh flex items-center justify-center">
      <Card className="min-w-[550px]">
        <img
          src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg"
          className="w-[250px] h-[250px] rounded-full block m-auto"
          alt=""
        />
        <Typography.Title level={1} className="text-center">
          Login
        </Typography.Title>
        <div className="mb-4">
          <Typography.Title level={5}>Email</Typography.Title>
          <Input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <Typography.Title level={5}>Password</Typography.Title>
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className="bg-[#6674BB] w-full text-white" size="large" onClick={handleLogin}>
          Login
        </Button>  
        <Link to="/forgot" className="mt-4 text-center block font-bold text-base">Forgot Password?</Link>
      </Card>
    </div>
  );
};

export default SignIn;
