import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem"

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    }
    //在constructor中将bind(this)赋值，以避免在render中使用，可以有效提升代码效率
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list   //等价于一个list
    })
  }

  getTodoItems() {
    return (
      /*父组件通过属性的形式向子组件传递参数 */
      this.state.list.map((item,index) => {
        return (
        <TodoItem 
          delete={this.handleDelete} 
          key={index} 
          content={item} 
          index={index}
        />
        )
      })
    );
  }

  render() {
    return (
      //Fragment可以使其不必包括在一个大div里
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className="red-btn" onClick={this.handleBtnClick}>Add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
    </Fragment>
    )
  }
}

export default TodoList;
