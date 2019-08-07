// All was going well until added the axios 
// code and then it wouldnt show anything 
// new that had been added to the todo list.
// Grr.
// Went through all code, tried fiddling with it,
// nothing. Eventually tried copying and pasting
// the addItem code... then tried copying and pasting
// ALL his code...millions of errors.
// Bedtime.. Will try another day.


import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Components/Todos';
import Header from './Components/Layout/Header';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';
// import uuid from 'uuid';
import axios from 'axios';


class App extends Component {
  state = {
    todos: []
}

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then((res) => this.setState({ todos: res.data }));
}

//Toggle Complete
markComplete = (id) => {
  this.setState({ 
    todos: this.state.todos.map((todo) => {
  if (todo.id === id){
    todo.completed = !todo.completed
  }
  return todo;
  })
});
};

//Delete Todo
delToDo = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/todos${id}`)
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo =>
    todo.id !== id)] }));
  }

//Add Todo - y u no work??? 1:32
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then((res) => {
      this.setState({ todos: [...this.state.todos, 
        res.data] });
    });
};


render() {
return (
  <Router>
  <div className="App">
    <div className="container">
    <Header />
    <Route exact path = "/" render = {props => (
      <React.Fragment>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} 
      markComplete={this.markComplete} 
      delToDo={this.delToDo}  />
      </React.Fragment>
      )} />
      <Route path="/about" component={About} />
    </div>
   </div>
  </Router>
);
}
}

export default App;
