MenuForm = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let cart = Meteor.subscribe('Cart');
    return {cart};
  },

  getInitialState() {
    let price = _.first(this.props.dataPrice[0]);
    let qty = this.props.dataPrice[0][1];
    let strainName = this.props.strainName[0];

    return {
      qty : 1,
      size: [price, qty],
      strainName: strainName
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

    Meteor.call('addCartItem', this.state.qty, this.state.size, this.state.strainName);

    //cartItem.push(
    //  {
    //    qty: this.state.qty,
    //    size: this.state.size,
    //    strainName: this.props.strainName
    //  }
    //);

    Session.set('count', cartItem.length);
  },

  render() {

    console.log(this.props);

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
