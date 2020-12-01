import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
import ListTask from "./components/Tasks/List-Tasks";

const ListTasks = lazy(() => import("./components/Tasks/List-Tasks"));

const AddTask = lazy(() => import("./components/Tasks/Add-Task"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spin></Spin>}>
        <Router>
          <div>
            <Switch>
              <Route path="/list-tasks">
                <ListTasks />
              </Route>
              <Route path="/create-task">
                <AddTask />
              </Route>
              <Route path="/bulk-delete">
                <ListTask showCheckBox={true}></ListTask>
              </Route>
            </Switch>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
