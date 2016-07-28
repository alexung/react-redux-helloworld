import { createStore } from 'redux';
import RootReducer from './reducers';
import { addTask } from './actions';

let store = createStore(RootReducer);

store.subscribe(function() {
  console.log(store.getState());
});

// tells store there is a new action and calls it, which in this case adds a todo item
store.dispatch(addTask('my new task', 'todo'));

// const helloWorld = "Hello World!";

// console.log(`${helloWorld}`);