import React, { useState } from 'react';
import './App.css'




const Title = () => {
  const name = "Christophe";
  return <h1>Hello, {name}</h1>;
};

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      id="userInput"
      placeholder="Type a new to do"
      value={value}
      onChange={onChange}
    />
  );
};

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Add Todo</button>;
};



const App = () => {
  
  const handleDelete = ({todos, index}) =>{
    let todosCopy = [...todos]
    todosCopy.splice(index,1)
    setTodos(todosCopy);
  }
  
  
  const ToDoList = ({ todos }) => {
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <input type="checkbox" id={`todoCheckbox${index}`} />
            <label htmlFor={`todoCheckbox${index}`}>{todo}</label>
            <button onClick = {() => handleDelete({todos , index})}>X</button>
          </div>
        ))}
      </div>
    );
  };
  const [todos, setTodos] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    
      setTodos([...todos, inputValue]);
      setInputValue("");
    
  };

  return (
    <div>
      <Title />
      <Input type="text" value={inputValue} onChange={handleInputChange} />
      <br /><br />
      <Button onClick={handleAddTodo} />
      <hr></hr>
      <ToDoList todos={todos} />
    </div>
  );
};

export default App
