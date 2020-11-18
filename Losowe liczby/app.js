// przycisk - po kliknieciu dodawana jest cyfra do tekstu

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     text: "",
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  state = {
    text: "",
  };

  handleClick() {
    const num = Math.floor(Math.random() * 10);
    // this.setState({
    //   text: this.state.text + letter,
    // });
    this.setState(() => ({
      text: this.state.text + num + " ",
    }));
  }

  render() {
    const btnName = "stwórz liczbe";
    return (
      <>
        <button onClick={this.handleClick.bind(this)}>{btnName}</button>
        <PanelResult text={this.state.text}></PanelResult>
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

ReactDOM.render(
  <App btnTitle="dodaj cyfre" />,
  document.getElementById("root")
);
