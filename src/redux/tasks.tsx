import {ADD_TASK, DELETE_TASK} from './constants';

const INITIAL_STATE: any = [];

const taskReducer = (state = INITIAL_STATE, action: any) =>{
  switch(action.type){
    case ADD_TASK :
      return [...state, {
        key: action.key, 
        text: action.text, 
      }
      ];
      case DELETE_TASK :
      return [...state, {
        key: action.key, 
        text: action.text, 
      }
      ];
      default: return state;
  }
}

export default taskReducer;