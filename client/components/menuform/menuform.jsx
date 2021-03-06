MenuForm = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Cart');
    return {};
  },

  getInitialState() {
    let price = _.first(this.props.dataPrice[0]);
    let qty = this.props.dataPrice[0][1];

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
    let self = this;
    let option = _.words(_.trim(e.target.value, '(g)'));
    let orderSize = _.map(option, _.parseInt);

    this.setState({size: orderSize}, function () {
      self.props.onValueChange(self.state.size);
    });
  },

  addToCart(e) {
    e.preventDefault();
    Meteor.call('addCartItem', this.state.qty, this.state.size, this.props.strainName, this.props.SKU);
  },

  render() {
    return (
      <div className="menuForm">
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
