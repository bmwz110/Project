import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        "learn react",
        "learn english",
        "learn vue"
      ]
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, "hello world"]
    })
  }

  render() {
    return (
      <div>
        <div>
          <input />
          {/*若无bind(this),
          由于handleBtnClick本身处于button中，所以该方法内的this将指向button，
          加上bind(this)后，
          方法内的this将与this.handleBtnClick的this指向同一处，既整个TodoList组件 */}
          <button onClick={this.handleBtnClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
