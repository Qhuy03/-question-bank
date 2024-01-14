import React, { useState, useEffect } from 'react'
import Main from '../components/Main'
import { Button, Form, Input, Modal, Row, Col,Space, Spin, Table, Tag, Typography } from 'antd'
import { DeleteFilled, EditFilled, LoadingOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ListUser = () => {

  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('metadata') == null){
      navigate('/signin')
      console.log(localStorage.getItem('metadata'));
    }
  }, [])

  useEffect(() => {

    const headers = {
      'Content-Type': 'application/json',
      'x-user-id': JSON.parse(localStorage.getItem('metadata')).userData._id
    };
    console.log(JSON.parse(localStorage.getItem('metadata')).userData._id);
    // Gửi yêu cầu GET khi component được render
    axios.get('http://localhost:8000/api/v1/admin/user', {
      headers
    })
      .then(response => {
        // Xử lý dữ liệu nhận được từ response
        console.log(response);
      })
      .catch(error => {
        // Xử lý các lỗi nếu có
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Full name',
      dataIndex: 'fullname',
      key: 'fulname',
    },
    {
      title: 'Role',
      key: 'role',
      dataIndex: 'role',
    },
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className='flex items-center gap-2'>
          <Button
            icon={<EditFilled />}
          />
          <Button
            icon={<DeleteFilled />}
          />
        </div>
      ),
    },
  ];
  const data = [
    {
      id: '1',
      username: 'John Brown',
      fullname: 32,
      role: 'New York No. 1 Lake Park',
      date: '12/04/2022',
    },
    {
      id: '1',
      username: 'John Brown',
      fullname: 32,
      role: 'New York No. 1 Lake Park',
      date: '12/04/2022',
    },
    {
      id: '1',
      username: 'John Brown',
      fullname: 32,
      role: 'New York No. 1 Lake Park',
      date: '12/04/2022',
    },
    {
      id: '1',
      username: 'John Brown',
      fullname: 32,
      role: 'New York No. 1 Lake Park',
      date: '12/04/2022',
    },
  ]

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('');
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setModalText('')
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Main>
        <Row>
          <Button className='bg-white block ml-auto font-bold'
            icon={<PlusCircleOutlined 
              style={{
                color: 'green',
              }}  
              />}
            onClick={showModal}
          >
            Create User
          </Button>
        </Row>
        <Row className='mt-4'>
          <Table className='w-full' columns={columns} dataSource={data} />
        </Row>
      </Main>
      <Modal
        title={<Typography.Title level={4} style={{ color: '#3182CE' }} >Create User</Typography.Title>}
        open={open}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            {
              confirmLoading ? 
                <Button style={{ width: '100px'  }}
                  icon={<Spin indicator={<LoadingOutlined style={{ fontSize: 20 }} spin />} />}
                ></Button> : 
                <Button
                onClick={handleOk}
                type='primary' ghost>Submit</Button>
            }
          </>
        )}
        className='text-center'
      >
      <Form
        form={form}
        layout="vertical"
      >
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item label="Username" required tooltip="This is a required field">
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Fullname" required tooltip="This is a required field">
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item label="Password" required tooltip="This is a required field">
              <Input type='password' placeholder="input placeholder" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Confirm Password" required tooltip="This is a required field">
              <Input type='password' placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Form.Item label="Role" required tooltip="This is a required field">
              <Input type='Text' placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
        <p>{modalText}</p>
      </Modal>
    </>
  )
}

export default ListUser