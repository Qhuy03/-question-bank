import React, { useState, useEffect } from "react";
import Main from "../components/Main";
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
} from "antd";
import {
  DeleteFilled,
  EditFilled,
  LoadingOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";

const ListUser = () => {
  const [getListuser, setGetListUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("metadata") == null) {
      navigate("/signin");
      console.log(localStorage.getItem("metadata"));
    }
  }, []);


  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [form] = Form.useForm();
  const [user, setUser] = useState({
    address: "",
    avatarUrl: "",
    createdAt: "",
    email: "",
    fullName: "",
    genderIdentity: "",
    role: "",
    status: "",
    updatedAt: "",
    userName: "",
    __v: 0,
    _id: "",
  });
  const showModal = () => {
    setOpen(true);
  };

  const showModalUpdate = (user) => {
    console.log(user);
    setUser(user);
    setOpenUpdate(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setModalText("");
      setConfirmLoading(false);
      // handleGetListuser()
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const handleCancelUpdate = () => {
    setOpenUpdate(false);
  };


  
  const handleGetListuser = async () => {
    await axios
    .get("http://localhost:8000/api/v1/manager/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("metadata")).authToken.accessToken,
      },
    })
    .then((response) => {
      // Xử lý dữ liệu nhận được từ response
      console.log(response.data.metadata);
      setGetListUser(response.data.metadata);
    })
    .catch((error) => {
      // Xử lý các lỗi nếu có
      console.error("Error fetching data:", error);
    })
  }

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem('metadata')).authToken.accessToken);
    // Gửi yêu cầu GET khi component được render
    handleGetListuser()
  }, [confirmLoading])

  console.log(getListuser);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_info, record) => (
        <div className="flex items-center gap-2">
          <Button
            icon={<EditFilled onClick={() => showModalUpdate(_info)} />}
          />
          <Button icon={<DeleteFilled />} />
        </div>
      ),
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Xử lý sự kiện khi người dùng nhập liệu
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdateUser = () => {
    let data = {
      userId: JSON.parse(localStorage.getItem("metadata")).authToken.accessToken
    }
    // Gửi yêu cầu PUT để cập nhật thông tin người dùng
    axios
      .put(`http://localhost:8000/api/v1/manager/user`, {
        'user_data': user,
        'jwt-payload': JSON.stringify(data),
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("metadata")).authToken.accessToken,
        },
      })
      .then((response) => {
        console.log("Dữ liệu đã được cập nhật thành công:", response.data);
        setModalText("Update thành công");
        setConfirmLoading(true);
        setTimeout(() => {
          setOpenUpdate(false);
          setModalText("");
          setConfirmLoading(false);
          
        }, 1000);
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật dữ liệu người dùng:", error);
      });
  };

  return (
    <>
      <Main>
        <Row>
          <Button
            className="bg-white block ml-auto font-bold"
            icon={
              <PlusCircleOutlined
                style={{
                  color: "green",
                }}
              />
            }
            onClick={showModal}
          >
            Create User
          </Button>
        </Row>
        <Row className="mt-4">
          <Table
            className="w-full"
            columns={columns}
            dataSource={getListuser}
          />
        </Row>
      </Main>
      <Modal
        title={
          <Typography.Title level={4} style={{ color: "#3182CE" }}>
            Create User
          </Typography.Title>
        }
        open={open}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            {confirmLoading ? (
              <Button
                style={{ width: "100px" }}
                icon={
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 20 }} spin />
                    }
                  />
                }
              ></Button>
            ) : (
              <Button onClick={handleOk} type="primary" ghost>
                Submit
              </Button>
            )}
          </>
        )}
        className="text-center"
      >
        <Form form={form} layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item
                label="Username"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Fullname"
                required
                tooltip="This is a required field"
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item
                label="Password"
                required
                tooltip="This is a required field"
              >
                <Input type="password" placeholder="input placeholder" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Confirm Password"
                required
                tooltip="This is a required field"
              >
                <Input type="password" placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item
                label="Role"
                required
                tooltip="This is a required field"
              >
                <Input type="Text" placeholder="input placeholder" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p>{modalText}</p>
      </Modal>

      <Modal
        title={
          <Typography.Title level={4} style={{ color: "#3182CE" }}>
            Edit User
          </Typography.Title>
        }
        open={openUpdate}
        onCancel={handleCancelUpdate}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            {confirmLoading ? (
              <Button
                style={{ width: "100px" }}
                icon={
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 20 }} spin />
                    }
                  />
                }
              ></Button>
            ) : (
              <Button onClick={handleUpdateUser} type="primary" ghost>
                Submit
              </Button>
            )}
          </>
        )}
        className="text-center"
      >
        <Form form={form} layout="vertical">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item
                label="Username"
                required
                tooltip="This is a required field"
              >
                <Input
                  placeholder="input placeholder"
                  value={user?.userName}
                  onChange={(e => setUser({...user, userName: e.target.value}))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Fullname"
                required
                tooltip="This is a required field"
              >
                <Input
                  placeholder="input placeholder"
                  value={user?.fullName}
                  onChange={(e => setUser({...user, fullName: e.target.value}))}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Form.Item
                label="Role"
                required
                tooltip="This is a required field"
              >
                <Input
                  type="Text"
                  placeholder="input placeholder"
                  value={user?.role}
                  onChange={(e => setUser({...user, role: e.target.value}))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address"
                required
                tooltip="This is a required field"
              >
                <Input
                  placeholder="input placeholder"
                  value={user?.address}
                  onChange={(e => setUser({...user, address: e.target.value}))}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default ListUser;
