import React, { useState } from "react";
import { Button, Card, Input, Typography } from "antd";

const SignIn = () => {
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
          <Typography.Title level={5}>Username</Typography.Title>
          <Input placeholder={"Username"} />
        </div>
        <div className="mb-4">
          <Typography.Title level={5}>Password</Typography.Title>
          <Input type="password" placeholder="Password" />
        </div>
        <Button className="bg-[#6674BB] w-full text-white" size="large">
          Login
        </Button>  
        <a href="" className="mt-4 text-center block font-bold text-base">Forgot Password?</a>
      </Card>
    </div>
  );
};

export default SignIn;
