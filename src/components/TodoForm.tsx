import * as React from 'react'
import styled from 'styled-components';
import {TodoListInterface, TodoFormInterface} from '../interfaces'
import {connect} from 'react-redux';
import {addTask} from '../redux/actionCreaters';

const Header = styled.div`
input {
  padding: 10px;
  font-size: 16px;
  border: 2px solid #FFF;
  width: 105px;
}
button {
  padding: 10px;
  font-size: 16px;
  margin-right: 0px;
  background-color: #0066FF;
  color: #FFF;
  border: 2px solid #0066FF;
}
button:hover {
  background-color: #003399;
  border: 2px solid #003399;
  cursor: pointer;
}
`;

const TodoForm = (props: TodoFormInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [formState, setFormState] = React.useState('');

    function formSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const newTodo: TodoListInterface = {
            key: 1+ Math.random(),
            text: formState
          };
          // Create new todo item
          props.createTodo(newTodo);

          if (inputRef && inputRef.current) {
            inputRef.current.value = '';
          }
    }

    function inputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value);
    }

    function inputEnter(event: React.KeyboardEvent) {
        // Check for 'Enter' key
        if (event.key === 'Enter') {
          // Reset the input field
          if (inputRef && inputRef.current) {
            inputRef.current.value = '';
          }
        }
    }
    return( 
    <Header>
    <form onSubmit={formSubmit}>
        <input  ref={inputRef} type="text" placeholder="add new item" 
         onChange={event => inputChange(event)}
         onKeyPress={event => inputEnter(event)}>
        </input>
        <button type="submit">Add</button>
    </form>
    </Header>);
}

const mapDispatchToProps = (dispatch: any) => ({
  addTask: (key: number, text: string) => dispatch(addTask(key, text)),
});
export default connect(null, mapDispatchToProps)(TodoForm);
