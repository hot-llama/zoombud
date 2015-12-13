MenuForm = React.createClass({

  getInitialState() {
    var price = _.first(this.props.dataPrice[0]);
    var qty = this.props.dataPrice[0][1];

    return {
      qty: "1",
      size: [price,qty]
    };
  },

  getDefaultProps() {
    return {
      qtySize: ""
    }
  },

  onChangeQty(e) {
    var self = this;
    this.setState({qty: e.target.value}, function () {
      self.props.onValueChange(self.state.qty);
    });
  },

  onChangeSize(e) {
    var self = this;
    this.setState({size: _.words(e.target.value)}, function () {
      self.props.onValueChange(self.state.size);
    });
  },

  orderSubmitHandler(e) {
    e.preventDefault();
    console.log(this.state.qty, "-", this.state.size);
  },

  render() {
    return (
      <div className="menuForm">
        <label className="item item-input">
          <input type="text" placeholder="Qty" ref="qtyInput" onChange={this.onChangeQty}/>
        </label>
        <select className="menu-select" onChange={this.onChangeSize} value={this.state.value}>
          {this.props.dataPrice.map(function (result, id) {
            return <option key={id}>{result[0]} / {result[1]} (g)</option>
          })}
        </select>
        <button className="plus-button pull-right ion-plus-circled button button-outline button-balanced"
                onClick={this.orderSubmitHandler}></button>
      </div>
    )
  }
})
