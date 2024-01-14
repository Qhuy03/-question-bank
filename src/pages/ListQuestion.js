import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Input,
  Modal,
  Row,
  Col,
  Space,
  Spin,
  Table,
  Tag,
  Typography,
  Card,
  Select,
  Image,
  Radio,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteFilled,
  DownloadOutlined,
  EditFilled,
  ExportOutlined,
  ImportOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  PlusCircleOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UploadOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Search from "antd/es/input/Search";
const { Dragger } = Upload;
const ListQuestion = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('metadata') == null){
      navigate('/signin')
      console.log(localStorage.getItem('metadata'));
    }
  }, [])
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
    },
    {
      title: "Teacher",
      key: "teacher",
      dataIndex: "teacher",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <Button icon={<InfoCircleOutlined />} />
          <Button icon={<EditFilled />} />
          <Button icon={<DeleteFilled />} />
        </div>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      question: "John Brown",
      answer: 32,
      teacher: "New York No. 1 Lake Park",
    },
  ];
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const onChangeType = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearchType = (value) => {
    console.log("search:", value);
  };
  const filterOptionType = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChangeLevel = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearchLevel = (value) => {
    console.log("search:", value);
  };
  const filterOptionLevel = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const onChangeTeacher = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearchTeacher = (value) => {
    console.log("search:", value);
  };
  const filterOptionTeacher = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      <Main>
        <Row className="mt-4">
          <Col span={24}>
            <Card bordered={true}>
              <Form layout="horizontal">
                <Row gutter={12}>
                  <Col span={4}>
                    <Search
                      placeholder="input search text"
                      allowClear
                      onSearch={onSearch}
                      style={{ width: 200 }}
                    />
                  </Col>
                  <Col span={4}>
                    <Form.Item required>
                      <Select
                        showSearch
                        placeholder="Type"
                        optionFilterProp="children"
                        onChange={onChangeType}
                        onSearch={onSearchType}
                        filterOption={filterOptionType}
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "tom",
                            label: "Tom",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item required>
                      <Select
                        showSearch
                        placeholder="Level of difficul"
                        optionFilterProp="children"
                        onChange={onChangeType}
                        onSearch={onSearchType}
                        filterOption={filterOptionType}
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "tom",
                            label: "Tom",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item label="Mark" required>
                      <Input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Form.Item required>
                      <Select
                        showSearch
                        placeholder="Teacher"
                        optionFilterProp="children"
                        onChange={onChangeTeacher}
                        onSearch={onSearchTeacher}
                        filterOption={filterOptionTeacher}
                        options={[
                          {
                            value: "jack",
                            label: "Jack",
                          },
                          {
                            value: "lucy",
                            label: "Lucy",
                          },
                          {
                            value: "tom",
                            label: "Tom",
                          },
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <Button className="mr-2" icon={<ImportOutlined />}>
                      Import File
                    </Button>
                    <Button icon={<ExportOutlined />}>Export File</Button>
                  </Col>
                </Row>
              </Form>
              <Row gutter={24}>
                <Table className="w-full" columns={columns} dataSource={data} />
              </Row>
            </Card>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default ListQuestion;
