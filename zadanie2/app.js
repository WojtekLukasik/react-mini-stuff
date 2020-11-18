const Person = (props) => {
  return (
    <React.Fragment>
      <li>
        {props.name} {props.lastName[0]}.
        <button
          onClick={() => {
            props.handleButton(props.id);
          }}
        >
          Usuń
        </button>
      </li>
    </React.Fragment>
  );
};

class List extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: "Jan",
        lastName: "Kowalski",
      },
      {
        id: 2,
        name: "Marysia",
        lastName: "Polańska",
      },
      {
        id: 3,
        name: "Piotr",
        lastName: "Cybulski",
      },
      {
        id: 4,
        name: "John",
        lastName: "Wick",
      },
    ],
  };

  handleButton = (id) => {
    const { data } = this.state;
    let newData = [];
    data.forEach((el) => {
      if (el.id !== id) {
        newData.push(el);
      }
    });
    this.setState({
      data: newData,
    });
  };

  render() {
    const { data } = this.state;
    const people = data.map((person) => {
      return (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          lastName={person.lastName}
          handleButton={this.handleButton}
        />
      );
    });
    return <React.Fragment>{people}</React.Fragment>;
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
