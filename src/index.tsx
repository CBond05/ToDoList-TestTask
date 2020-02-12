import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./styles/App.css"
import TodoList from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
<Provider store={store}>
    <TodoList />
</Provider>, 
document.getElementById('root'));

