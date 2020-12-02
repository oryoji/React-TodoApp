import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.todos.map((o) => {
      return (
        <li>
          #{o.id} {o.title}
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
