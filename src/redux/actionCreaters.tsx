import {ADD_TASK, DELETE_TASK} from './constants';

export const addTask = (key: number, text: string) => ({
  type: ADD_TASK,
  key,
  text,
});
export const deleteTask = (key: number) => ({
    type: DELETE_TASK,
    key,
  });
  
