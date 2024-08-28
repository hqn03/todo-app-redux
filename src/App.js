import { Typography, Divider } from "antd";
import "./App.css";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX</Title>
      <Filter />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
