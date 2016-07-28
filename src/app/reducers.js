import { GET_TASKS, ADD_TASK, COMPLETE_TASK } from './actions';

export default rootReducer;

const initialState = {
  tasks: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case GET_TASKS:
      return Object.assign({}, state, {tasks: action.payload.tasks });
    case ADD_TASK:
      return addTaskReducer(state, action);
    case COMPLETE_TASK:
      return completeTaskReducer(state, action);
    default:
      return state;
  }

  return state;
}

function addTaskReducer(state, action) {
  var task = action.payload;
  task.completed = false;

  var lastTask = state.tasks[state.tasks.length - 1];
  task.id = lastTask.id++;

  // ... spread operator copies all of state.tasks into an arr
  return Object.assign({}, state, { tasks: [...state.tasks, task] });
}

function completeTaskReducer(state, action) {
  var id = action.payload.id;

  return Object.assign({}, state, { tasks: state.tasks.map(task => {
      if (id === task.id) {
        return Object.assign({}, task, { completed: true });
      }

      return task;
    })
  });
}


// if task is
// {
//   id: 1,
//   type: 'habit',
//   text: 'laugh'
// }

// Object.assign({}, task) simply gives you
// ==>
// {
//   id: 1,
//   type: 'habit',
//   text: 'laugh'
// }

// if you have Object.assign({}, task, { completed: true }) that gives you:
// ==>
// {
//   id: 1,
//   type: 'habit',
//   text: 'laugh',
//   completed: true
// }

// BUT keep in mind that if you do task == newObj (if new Obj is the Object.assign) it would give you false
// even if contents of the both are identical
