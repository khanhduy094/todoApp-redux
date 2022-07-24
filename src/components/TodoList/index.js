import { Button, Col, Input, Row, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodoAction } from "../../redux/actions";
import { todoListSelector, todoRemainingSelector } from "../../redux/selector";
import Todo from "../Todo";

export default function TodoList() {
  // const [inputState, setInputState] = useState();
  // const [priorityState, setPriorityState] = useState("Medium");
  // const dispatch = useDispatch();
  // const todoList = useSelector(todoRemainingSelector);
  // const handleInputChange = (e) => {
  //   setInputState(e.target.value)
  // }

  // const handlePriorityChange = (value) => {
  //   setPriorityState(value)
  // }

  // const handleAddTodo = () => {
  //   dispatch(addTodoAction({
  //     id: uuidv4(),
  //     name: inputState,
  //     completed: false,
  //     priority: priorityState
  //   }))
  //   setInputState("");
  //   setPriorityState("Medium")

  const [inputState, setInputState] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  // const todoList = useSelector((state) => state.todoList);
  const todoList = useSelector(todoRemainingSelector);

  const handleInputChange = (e) => {
    setInputState(e.target.value);
  };

  const addTodo = () => {
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: inputState,
        completed: false,
        priority: priority,
      })
    );
    setInputState("");
    setPriority("Medium");
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            priority={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input onChange={handleInputChange} value={inputState} />
          <Select
            defaultValue="Medium"
            onChange={handlePriorityChange}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={addTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
