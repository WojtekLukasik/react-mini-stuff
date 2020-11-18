// const PositiveMessage = () => <p>Możesz obejrzeć film.</p>;
// const NegativeMessage = () => (
//   <p>Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!</p>
// );

const ValidationMessage = (props) => <p>{props.txt}</p>;

const OrderForm = (props) => (
  <form onSubmit={props.submit}>
    <input
      type="checkbox"
      id="age"
      onChange={props.change}
      checked={props.checked}
    />
    <label htmlFor="age">Mam co najmniej 16 lat</label>
    <br />
    <button>Kup bilet</button>
  </form>
);

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Możesz obejrzeć film." />;
      } else {
        return (
          <ValidationMessage txt="Nie możesz obejrzeć tego filmu jeśli masz mniej niż 16 lat!" />
        );
      }
    } else {
      return null;
    }
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };
  render() {
    const { isConfirmed } = this.state;
    return (
      <React.Fragment>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
