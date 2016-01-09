MenuForm = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let cart = Meteor.subscribe('Cart');

    return {cart};
  },

  getInitialState() {
    var price = _.first(this.props.dataPrice[0]);
    var qty = this.props.dataPrice[0][1];

    return {
      qty : 1,
      size: [price, qty]
    };
  },

  onChangeQty(e) {
    let self = this;
    let qty = _.parseInt(e.target.value, 10)

    this.setState({qty: qty}, function () {
      self.props.onValueChange(self.state.qty);
    });
  },

  onChangeSize(e) {
    var self = this;
    var option = _.words(_.trim(e.target.value, '(g)'));
    var orderSize = _.map(option, _.parseInt);

    this.setState({size: orderSize}, function () {
      self.props.onValueChange(self.state.size);
    });
  },

  addToCart(e) {
    e.preventDefault();

    cartItem.push(
        {
          qty: this.state.qty,
          size: this.state.size,
          strainName: this.props.strainName
        }
    );


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
                onClick={this.addToCart}> </button>
      </div>
    )
  }
});
