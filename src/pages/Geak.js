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
const Geak = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('metadata') == null){
      navigate('/signin')
      console.log(localStorage.getItem('metadata'));
    }
  }, [])
  const [form] = Form.useForm();
  const [showImage, setShowImage] = useState(false);
  const [value, setValue] = useState("A");
  const [type, setType] = useState("reading");
  const onChangeChoice = (e) => {
    setValue(e.target.value);
  };
  const src =
    "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
  const propsLeft = {
    name: "file",
    multiple: false,
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    listType: "picture",
    onChange(info) {
      debugger;
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setShowImage(true);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const propsRight = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const propsWritting = {
    name: "file",
    action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  const onDownload = () => {
    fetch(src)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };
  const onRemove = () => {
    setShowImage(false);
  };

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
                    <Button className="mr-2"
                        icon={<ImportOutlined />}
                    >
                        Import File
                    </Button>
                    <Button
                        icon={<ExportOutlined />}
                    >
                        Export File
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Row gutter={24}>
                <Col span={12}>
                  {!showImage ? (
                    <Dragger {...propsLeft} height={300}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag file to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited
                        from uploading company data or other banned files.
                      </p>
                    </Dragger>
                  ) : (
                    <Image
                      width={300}
                      height={300}
                      src={src}
                      preview={{
                        toolbarRender: (
                          _,
                          {
                            transform: { scale },
                            actions: {
                              onFlipY,
                              onFlipX,
                              onRotateLeft,
                              onRotateRight,
                              onZoomOut,
                              onZoomIn,
                            },
                          }
                        ) => (
                          <Space size={12} className="toolbar-wrapper">
                            <DownloadOutlined onClick={onDownload} />
                            <SwapOutlined rotate={90} onClick={onFlipY} />
                            <SwapOutlined onClick={onFlipX} />
                            <RotateLeftOutlined onClick={onRotateLeft} />
                            <RotateRightOutlined onClick={onRotateRight} />
                            <ZoomOutOutlined
                              disabled={scale === 1}
                              onClick={onZoomOut}
                            />
                            <ZoomInOutlined
                              disabled={scale === 50}
                              onClick={onZoomIn}
                            />
                            <CloseOutlined onClick={onRemove} />
                          </Space>
                        ),
                      }}
                    />
                  )}
                </Col>
                <Col span={12}>
                  <Upload {...propsRight}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                  <Input.TextArea rows={11} className="mt-4" />
                </Col>
              </Row>

              {type === "reading" && (
                <Row gutter={[12, 12]} className="mt-10">
                  <div className="hidden">
                    <Radio.Group onChange={onChangeChoice} value={value}>
                      <Radio name="choice" id="A" value={"A"}>
                        A
                      </Radio>
                      <Radio name="choice" id="B" value={"B"}>
                        B
                      </Radio>
                      <Radio name="choice" id="C" value={"C"}>
                        C
                      </Radio>
                      <Radio name="choice" id="D" value={"D"}>
                        D
                      </Radio>
                    </Radio.Group>
                  </div>
                  <Col span={12}>
                    <div className="flex h-full items-center">
                      <Tag
                        bordered={false}
                        color="#ef4444"
                        className="px-4 py-9 font-bold text-lg"
                      >
                        A
                      </Tag>
                      <div className="flex items-center gap-2 w-full px-2 py-8 bg-red-500">
                        <Input
                          placeholder={"Answer"}
                          className="text-white bg-transparent border-none outline-none"
                          size="large"
                        />
                        <label
                          for="A"
                          className="flex items-center justify-center w-6 h-6 rounded-full border-[1px] border-white"
                        >
                          {value === "A" && (
                            <CheckOutlined
                              style={{ fontWeight: "bold", color: "white" }}
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="flex h-full items-center">
                      <Tag
                        bordered={false}
                        color="#3b82f6"
                        className="px-4 py-9 font-bold text-lg"
                      >
                        B
                      </Tag>
                      <div className="flex items-center gap-2 w-full px-2 py-8 bg-blue-500">
                        <Input
                          placeholder={"Answer"}
                          className="text-white bg-transparent border-none outline-none"
                          size="large"
                        />
                        <label
                          for="B"
                          className="flex items-center justify-center w-6 h-6 rounded-full border-[1px] border-white"
                        >
                          {value === "B" && (
                            <CheckOutlined
                              style={{ fontWeight: "bold", color: "white" }}
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="flex h-full items-center">
                      <Tag
                        bordered={false}
                        color="#eab308"
                        className="px-4 py-9 font-bold text-lg"
                      >
                        C
                      </Tag>
                      <div className="flex items-center gap-2 w-full px-2 py-8 bg-yellow-500">
                        <Input
                          placeholder={"Answer"}
                          className="text-white bg-transparent border-none outline-none"
                          size="large"
                        />
                        <label
                          for="C"
                          className="flex items-center justify-center w-6 h-6 rounded-full border-[1px] border-white"
                        >
                          {value === "C" && (
                            <CheckOutlined
                              style={{ fontWeight: "bold", color: "white" }}
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className="flex h-full items-center">
                      <Tag
                        bordered={false}
                        color="#22c55e"
                        className="px-4 py-9 font-bold text-lg"
                      >
                        D
                      </Tag>
                      <div className="flex items-center gap-2 w-full px-2 py-8 bg-green-500">
                        <Input
                          placeholder={"Answer"}
                          className="text-white bg-transparent border-none outline-none"
                          size="large"
                        />
                        <label
                          for="D"
                          className="flex items-center justify-center w-6 h-6 rounded-full border-[1px] border-white"
                        >
                          {value === "D" && (
                            <CheckOutlined
                              style={{ fontWeight: "bold", color: "white" }}
                            />
                          )}
                        </label>
                      </div>
                    </div>
                  </Col>
                </Row>
              )}
              {type === "writting" && (
                <Row gutter={[12, 12]} className="mt-10">
                  <Col span={20}>
                    <Input.TextArea rows={11} className="py-4" />
                  </Col>
                  <Col span={4}>
                    <Upload {...propsWritting}>
                      <Button icon={<UploadOutlined />}>UploadFile</Button>
                    </Upload>
                    <Button className="mt-4 bg-blue-500 text-white">
                      Submit
                    </Button>
                  </Col>
                </Row>
              )}
            </Card>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Geak;
