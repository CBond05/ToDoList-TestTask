import React from 'react';
import TodoItems from "./components/TodoItems"
import {TodoListInterface} from './interfaces'
import TodoForm from './components/TodoForm'
import "./styles/TodoList.css"
import "./styles/App.css"

export const TodoList = () => {
  const [todos, setTodos] = React.useState<TodoListInterface[]>([]);
  
  function createTodo(todo: TodoListInterface){
    const itemState: TodoListInterface[] = [...todos]; 
    itemState.push(todo);
    setTodos(itemState);
  }

  function deleteItem(key: number){
    const itemState: TodoListInterface[] = todos.filter((item: TodoListInterface) =>
      (item.key !== key)
    );
    setTodos(itemState);
  }
    return (
        <div className="todoList">
          <TodoForm
            todos={todos}
            createTodo={createTodo}
          />
          <TodoItems 
            todo={todos}
            deleteItem={deleteItem}/>
          </div>
    )
}

export default TodoList;



