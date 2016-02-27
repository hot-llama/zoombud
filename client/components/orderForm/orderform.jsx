OrderForm = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Cart');

    return {
      cart: Cart.find({}).fetch(),
      items: [],
      count: []
    };
  },

  removeItem(e) {
    Meteor.call('removeCartItem', e.target.value);
  },

  /**
   * Groups the cart by SKU and pushes it to items array
   */
  itemCount() {
    let cartItems = _.groupBy(this.data.cart,"SKU");

    _.forIn(cartItems, function (val, prop) {
      if (cartItems.hasOwnProperty(prop)) {
        this.data.count.push(cartItems[prop].length);
        this.data.items.push(cartItems[prop][0]);
      }
    }, this);
    console.log("cartItems - ", cartItems);
    console.log("items - ", this.data.items);
    console.log("count - ", this.data.count);
  },

  render() {
    //@TODO - Update the badge to reflect quantity

    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            {this.itemCount()}
          </div>
          <div className="row">
            <div className="col">
              {this.data.items.map(function (result, id) {
                return (
                  <div className="card" key={id}>
                    <div className="item">{result.strain}
                      <span className="badge badge-balanced">{this.data.count[id]}</span>
                    </div>
                    <div className="item">
                      <div>{result.size[0]} / {result.size[1]}</div>
                      <button className="plus-button ion-minus-circled button button-outline button-assertive pull-right" onClick={this.removeItem} value={result._id}> </button>
                    </div>
                  </div>
                )
              }, this)}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="button button-balanced button-full" onClick={this.order}>Send Order</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
