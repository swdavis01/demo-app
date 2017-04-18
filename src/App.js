import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

var defaultState = {
  todo: {
    items: []
  }
};

// Add the actions here that we created in the previous steps...
function completeTodo(index) {
  return {
    type: 'COMPLETE_TODO',
    index: index
  };
}

function deleteTodo(index) {
  return {
    type: 'DELETE_TODO',
    index: index
  };
}

function clearTodo() {
  return {
    type: 'CLEAR_TODO'
  };
}

function todoApp(state, action) {
  // Add the reducer logic that we added in the previous steps...
  switch (action.type) {
    case 'ADD_TODO':
      var newState = Object.assign({}, state);

      newState.todo.items.push({
        message: action.message,
        completed: false
      });

      return newState;

    case 'COMPLETE_TODO':
      var newState = Object.assign({}, state);

      newState.todo.items[action.index].completed = true;

      return newState;

    case 'DELETE_TODO':
      var items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'CLEAR_TODO':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });

    default:
      return state;
  }
}

var store = createStore(todoApp, defaultState);




// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
