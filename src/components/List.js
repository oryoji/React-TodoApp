import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, deleteTodo } = this.props;
    const list = todos.map((o) => {
      return (
        <li key={o.id}>
          #{o.id} {o.title}{" "}
          <button
            onClick={() => {
              deleteTodo(o.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });
    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
