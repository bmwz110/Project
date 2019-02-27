import React, {Component} from "react";

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleDelete() {
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <div onClick={this.handleDelete}>
        {/*子组件通过props接受父组件传递过来的参数 */}
        {this.props.content}
      </div>
    )
  }
}

export default TodoItem; 