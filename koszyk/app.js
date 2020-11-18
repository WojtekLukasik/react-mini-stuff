class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 0,
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.3 } : {};
    return (
      <div>
        <button
          onClick={this.handleRemoveFromCart}
          disabled={shoppingCart ? false : true}
        >
          -
        </button>
        <span style={style}> {shoppingCart} </span>
        <button
          onClick={this.handleAddToCart}
          disabled={shoppingCart === availableProducts}
        >
          +
        </button>
        <button
          onClick={this.handleBuy}
          disabled={shoppingCart === 0}
          className="kup"
        >
          Kup
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
