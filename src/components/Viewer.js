import {
  Button,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Form,
  Spin,
  Alert,
  DatePicker,
} from "antd";
import ChartCanvas from "./ChartCanvas";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../features/users/usersSlice";
import { setSerchTerms } from "../features/users/serchSlice";

const { Option } = Select;

export const Viewer = () => {
  const dispatch = useDispatch();
  const { searches } = useSelector((state) => state);
  const { users } = useSelector((state) => state);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    Object.keys(values).forEach((key) => {
      if (values[key] === undefined) {
        values[key] = "";
      }
    });
    if (values.ages === "") {
      values.ages = [];
    }
    dispatch(setSerchTerms(values));
    dispatch(fetchUsers(values));
  };
  const resetForm = () => {
    form.resetFields();
  };

  return (
    <Row justify="center">
      <Form form={form} name="control-hooks" onFinish={onFinish}>
        <Col span={24} style={{ marginTop: 50 }}>
          <Row justify="center" gutter={8}>
            <Col>
              <Form.Item
                name="startDate"
                label="startDate"
                rules={[{ required: true }]}
              >
                <DatePicker id="startDateInput" placeholder="startDate" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="endDate"
                label="endDate"
                rules={[{ required: true }]}
              >
                <DatePicker id="endDateInput" placeholder="endDate" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                initialValue={"week"}
                name="timeUnit"
                label="timeUnit"
                rules={[{ required: true }]}
              >
                <Select placeholder="timeUnit" style={{ width: 120 }}>
                  <Option value="date">date</Option>
                  <Option value="week">week</Option>
                  <Option value="month">month</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                initialValue={"50000000"}
                name="category"
                label="category"
                tooltip={
                  <span>
                    쇼핑 분야 코드.
                    <a href="https://shopping.naver.com/home" target="_blank">
                      네이버쇼핑
                    </a>
                    에서 카테고리를 선택했을 때의 URL에 있는 cat_id 파라미터의
                    값으로 분야 코드를 확인할 수 있습니다.
                    <br />
                    ps: 기본값인 50000000의 태그는 "패션"
                  </span>
                }
                rules={[{ required: true }]}
              >
                <Input id="categoryInput" placeholder="category" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginTop: 50 }}>
          <Row justify="center" gutter={8}>
            <Col>
              <Form.Item
                initialValue={"정장"}
                name="keyword"
                label="keyword"
                rules={[{ required: true }]}
              >
                <Input id="keywordInput" placeholder="keyword" />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="ages" label="ages">
                <Select
                  mode="multiple"
                  allowClear
                  placeholder="ages"
                  style={{ minWidth: 120 }}
                >
                  <Option value="10">10~19세</Option>
                  <Option value="20">20~29세</Option>
                  <Option value="30">30~39세</Option>
                  <Option value="40">40~49세</Option>
                  <Option value="50">50~59세</Option>
                  <Option value="60">60세 이상</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="gender" label="gender">
                <Select placeholder="gender" style={{ width: 120 }}>
                  <Option value="m">male</Option>
                  <Option value="f">female</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Form.Item name="device" label="device">
                <Select placeholder="device" style={{ width: 120 }}>
                  <Option value="pc">pc</Option>
                  <Option value="mo">mo</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit">
                조회
              </Button>
            </Col>
            <Col>
              <Button type="primary" onClick={resetForm}>
                Clear Form
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
      <Divider />
      <Col span={24}>
        <Row justify="center">
          {users.status === "success" && (
            <ChartCanvas data={users.users[0].data} />
          )}
          {users.status === "loading" && <Spin />}
          {users.status === "failed" && (
            <Alert
              message="Hi, it's Error time"
              description="something's broken "
              type="error"
            />
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default Viewer;
