import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoListItem from './toDo.js';

class App extends React.Component{
  state = {
    todoList:JSON.parse(localStorage.getItem("todoList")) || []
  }

  addTodo = (item,callback) => {
    this.setState(
      {
        todoList:this.state.todoList.concat(item)
      },
      () => {
        localStorage.setItem("todoList",JSON.stringify(this.state.todoList))
        callback && callback()
      }
    )
  }

  removeTodo = (item,callback) => {
    this.setState(
      {
        todoList:this.state.todoList.filter(x => x !== item)        
      },
      () => {
        localStorage.setItem("todoList",JSON.stringify(this.state.todoList))
        callback && callback()
      }
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const titleElement = e.target.elements.title;
    const descriptionElement = e.target.elements.description;//computedではなくした
    //console.log(titleElement.value,descriptionElement.value)
    if (titleElement.value !== "" && descriptionElement.value !== ""){
      this.addTodo(
        {
          title:titleElement.value,
          description:descriptionElement.value
        },
        () => {
          titleElement.value = "";
          descriptionElement.value = "";
        }
      )
    } else {
      alert("やることとタイトルを入れてね！")
    }

  }
  render(){
    return (
      <div className="App">
          <form className="App_form"
            onSubmit={this.handleSubmit}
            >
          <div>
            <input
              id="title"
              placeholder="title"
            />
            <textarea
              id = "description"
              placeholder = "description"
            />
            </div>
            <div>
              <button type="submit">
                add!!!
              </button>
            </div>
          </form>
          <div>
            {this.state.todoList.map(todo => (
              <ToDoListItem
                key = {todo.title}
                title = {todo.title}
                description = {todo.description}
                onClick = {() => this.removeTodo(todo)}
              />
            ))}
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
