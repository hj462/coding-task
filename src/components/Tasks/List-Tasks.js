import React, { useState } from "react";
import { Layout, Card, Col, Row, Checkbox, Button } from "antd";

const ListTask = (props) => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [selectedTasksID, handleSeletectedTasks] = useState([]);

  const onChange = (id) => {
    let tasksID = [...selectedTasksID];
    if (tasksID.includes(id)) {
      tasksID.splice(tasksID.indexOf(id), 1);
    } else {
      tasksID.push(id);
    }
    handleSeletectedTasks(tasksID);
  };

  const handleDeletion = () => {
    const filteredTasks = tasks.filter(
      (task) => !selectedTasksID.includes(task.id)
    );

    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  return (
    <Layout>
      <Layout.Header className="header">All Tasks</Layout.Header>
      <Layout.Content className="content">
        <Row>
          {tasks &&
            tasks.map((task) => {
              return (
                <Col
                  key={task.id}
                  xs={{ span: 5, offset: 1 }}
                  lg={{ span: 6, offset: 2 }}
                >
                  <Card style={{ width: 200 }}>
                    <p>{task.name}</p>
                    {props.showCheckBox && (
                      <Checkbox
                        checked={selectedTasksID.includes(task.id)}
                        onChange={() => onChange(task.id)}
                      ></Checkbox>
                    )}
                  </Card>
                </Col>
              );
            })}
        </Row>
        <Button type="primary" onClick={handleDeletion}>
          Delete All
        </Button>
      </Layout.Content>
    </Layout>
  );
};

export default ListTask;
