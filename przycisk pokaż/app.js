class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }
  handleMessageButton() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive,
    }));
  }
  render() {
    const text = "lorem ipsum cośtam blablabla";
    return (
      <React.Fragment>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {this.state.messageIsActive && <p>{text}</p>}
      </React.Fragment>
    );
  }
}
//{this.state.messageIsActive ? <p>{text}</p> : null}
//<p>{this.state.messageIsActive && text}</p>
ReactDOM.render(<Message />, document.getElementById("root"));
