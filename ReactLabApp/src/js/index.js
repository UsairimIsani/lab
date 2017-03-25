
import "../css/index.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { auth , db } from "./firebase";

// db.ref('todo').on('value', (s) => console.log("On value ::" , s.val()));
// db.ref('todo').on('child_added', (s) => console.log("On child_added ::" , s.val()));
// db.ref('todo').once('value', (s) => console.log("Once value ::" , s.val()));
// db.ref('todo').once('child_added', (s) => console.log("Once child_added ::" , s.val()));


class App extends Component{
    constructor(){
        super();
        this.state = {
            todo:[]
        }
    }
    componentWillMount(){
        db.ref('/todo').on('child_added',(s)=>{
            let newTodo = Array.from(this.state.todo);
            newTodo.push(s.val());
            this.setState({todo:newTodo});
        })
    }
    AddTodo(e){
        e.preventDefault();
        console.log("Input value : ", this.refs.todo.value);
        // if(this.refs.todo.value != null && this.refs.todo.value !== "" && this.refs.todo.value !== " "){
            db.ref('/todo').push(this.refs.todo.value);
        // }else {
            // alert('write Something');
        // }
        
        this.refs.todo.value = '';
    }
    remove(e){
        let todos = Array.from(this.state.todo);
        console.lo
    }
    render(){
        return (
            <div>
                <form action="" 
           
                onSubmit={(e) => this.AddTodo(e)}                >
                    <input type="text" ref="todo" autoFocus/>
                    <input type="submit" value="Add todo"/>
                </form>
                <h1>Usairim Isani</h1>
                {
                    this.state.todo.map((value,index)=> {
                        return <h1 key={index}>{value}</h1>})                }
            </div>
        )
    }
}

render(
    <App />
     
,document.getElementById('root'));
