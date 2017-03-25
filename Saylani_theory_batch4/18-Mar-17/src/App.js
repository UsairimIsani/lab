import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'



class App extends Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)

    this.state = {
      todos: [],
      todoIn : ''
    }
  }

  componentWillMount() {
    let refRoot = firebase.database().ref('/todo/')
    refRoot.on("child_added", (snap) => {
      let currentTodo = this.state.todos;
     let  obj =snap.val();
      obj.id = snap.key;
      currentTodo.push(obj)
      this.setState({ todos: currentTodo })
    })
  }

  addTodo(ev) {
    ev.preventDefault()
    let refRoot = firebase.database().ref('/todo/')
    refRoot.push({ todo: this.refs.todo.value })
    this.setState({todoIn:''})
  }
removeTodo(ev){
//  console.log('this is ev',ev);
//  console.log('this is value',ev.value.todo);
//  console.log('this is index',ev.value.id);
 
 let refRoot = firebase.database().ref(`/todo/${ev.value.id}`);
 refRoot.remove().then((i) => {
  let todos = this.state.todos.slice();
 todos.splice(ev.index,1);
//  console.log('this is todos array',todos);
 this.setState({
   todos : todos,
  
 }) ;

 })
//  refRoot.remove();


 
}
  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        {/*<div className="App-header">*/}
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo</h2>
          <form onSubmit={this.addTodo}>
            <input type="text" ref="todo" onChange={(e) => {this.setState({todoIn : e.target.value}) }} value={this.state.todoIn}placeholder="Write your todo" />
            <button>Add Todo</button>
          </form>
          {this.state.todos.map((value, index) => {
            return (
              <h2 key={index}>{value.todo}  <button onClick={this.removeTodo.bind(this,{value,index})}>Remove</button>
              </h2>

            )
          })}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
