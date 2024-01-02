import React, { useState } from 'react'
import Main from '../components/Main'
import { Button, Form, Input, Modal, Row, Col,Space, Spin, Table, Tag, Typography, Card, Select } from 'antd'
import { DeleteFilled, EditFilled, LoadingOutlined, PlusCircleOutlined } from '@ant-design/icons'

const Question = () => {

  const [form] = Form.useForm();

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
          >
           Save
          </Button>
        </Row>
        <Row className='mt-4'>
            <Col span={24}>
                <Card bordered={true}>
                    <Form
                        layout="horizontal"
                    >
                        <Row gutter={12}>
                            <Col span={6}>
                                <Form.Item label="Type" required>
                                    <Select>
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Level" required>
                                    <Select>
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Mark" required>
                                    <Input type='text' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
      </Main>
    </>
  )
}

export default Question