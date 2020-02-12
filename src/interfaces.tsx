export interface TodoListInterface {
    key: number;
    text: string;
  }
  
  export interface TodoFormInterface {
    todos: TodoListInterface[];
    createTodo: (todo: TodoListInterface) => void;
  }
  
  export interface TodoItemInterface {
    todo: TodoListInterface[];
    deleteItem: (key: number) => void;
  }