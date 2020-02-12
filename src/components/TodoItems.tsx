import React from "react";
import { TodoItemInterface } from './../interfaces'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {deleteTask} from '../redux/actionCreaters';

const TheList = styled.ul `
    padding: 0;

     li:hover {
        background-color: pink;
        cursor: pointer;
    }

    li{
        color: #333;
        background-color: rgba(255, 255, 255, .5);
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        list-style: none;
        transition: background-color .2s ease-out;
    }
`;


const TodoItems = (props: TodoItemInterface) => {
    return(
            <TheList>
                {props.todo.map((todo) => (
                    <li key={todo.key} onClick={() => props.deleteItem(todo.key)}>
                        {todo.text}
                    </li>
                ))}
            </TheList>

    );
}

const mapStateToProps = (state: TodoItemInterface) => ({
    key: state.todo
  });

const mapDispatchToProps = (dispatch: any) => ({
    addTask: (key: number) => dispatch(deleteTask(key)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
  