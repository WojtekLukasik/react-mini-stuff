const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);

  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "gas",
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "zloty",
        ratio: 1,
        title: "Wartośc w zlotowkach:",
      },
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "Wartośc w dolarach:",
      },
      {
        id: 2,
        name: "euro",
        ratio: 4.2,
        title: "Wartośc w euro:",
      },
      {
        id: 1,
        name: "pound",
        ratio: 4.8,
        title: "Wartośc w funtach",
      },
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79,
    },
  };

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleSelectChange = (e) => {
    this.setState({
      product: e.target.value,
    });
  };

  insertSuffix(select) {
    if (select === "electricity") {
      return <em>kWh</em>;
    } else if (select === "gas") {
      return <em>litrów</em>;
    } else {
      return <em>kilogramów</em>;
    }
  }

  selectPrice = (select) => {
    return this.props.prices[select];
  };

  render() {
    const { amount, product } = this.state;

    const calculators = this.props.currencies.map((currency) => {
      return (
        <Cash
          key={currency.id}
          ratio={currency.ratio}
          title={currency.title}
          cash={amount}
          price={this.selectPrice(product)}
        />
      );
    });

    return (
      <div className="app">
        <label>
          Wybierz produkt:
          <select value={product} onChange={this.handleSelectChange}>
            <option value="electricity">prąd</option>
            <option value="gas">benzyna</option>
            <option value="oranges">pomarańcze</option>
          </select>
        </label>
        <br />
        <label>
          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleChange}
          />
          {this.insertSuffix(this.state.product)}
        </label>
        {calculators}
      </div>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
