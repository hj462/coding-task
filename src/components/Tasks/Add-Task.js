import React from "react";
import { Layout, Form, Input, Button } from "antd";
const AddTask = () => {
  const [form] = Form.useForm();
  const onSave = (values) => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = [...tasks, { ...values, id: Date.now() }];
    localStorage.setItem("tasks", JSON.stringify(tasks));

    form.resetFields();
  };

  return (
    <Layout>
      <Layout.Header className="header">Add New Task</Layout.Header>
      <Layout.Content className="content">
        <Form
          form={form}
          name="basic"
          initialValues={{ name: "" }}
          onFinish={onSave}
        >
          <Form.Item
            label="Task Name"
            name="name"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            rules={[{ required: true, message: "Please Enter Task Name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  );
};

export default AddTask;
