class App extends React.Component {
  state = {
    fortunes: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"],
    currentFortune: "",
    textInput: "",
  };

  handleInputChange = (e) => {
    this.setState({
      textInput: e.target.value,
    });
  };

  handleAddClick = () => {
    const newFortune = this.state.textInput;
    if (newFortune !== "") {
      const fortunes = [...this.state.fortunes, newFortune];
      this.setState({
        fortunes: fortunes,
        textInput: "",
      });
      alert(`Wróżba dodana. Aktualne wróżby: ${fortunes}`);
    }
  };

  showFortune = () => {
    const { fortunes } = this.state;
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    console.log(fortune);
    this.setState({
      currentFortune: fortune,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.showFortune}>Zobacz wróżbę</button>
        <br />
        <input
          value={this.state.textInput}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleAddClick}>dodaj wróżbę</button>
        <h1>{this.state.currentFortune}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
