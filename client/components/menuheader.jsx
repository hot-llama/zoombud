MenuHeader = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      data: cartItem
    }
  },

  getMeteorData() {
    return {
      cart: Cart.find({}).count()
    }
  },

  render() {

    var itemCount = this.data.cart;

    console.log(itemCount);

    return (
      <div className="bar bar-header">
        <UserAccount  />
        <h1 className="title">Zoombud</h1>
        <a href="/order" className="button icon ion-ios-cart bar-header__icon"> <span className="badge badge-balanced">{itemCount}</span></a>
      </div>
    )
  }
})