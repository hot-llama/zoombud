OrderForm = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Cart');
    let cartItems = _.groupBy(Cart.find({}).fetch(),"SKU");
    let count = [];
    let items = [];

    _.forIn(cartItems, function (val, prop) {
      if (cartItems.hasOwnProperty(prop)) {
        count.push(cartItems[prop].length);
        items.push(cartItems[prop][0]);
      }
    }, this);

    return {
      items: items,
      count: count
    };
  },

  removeItem(e) {
    Meteor.call('removeCartItem', e.target.value);
  },

  prepOrder() {
    let order = {};
    _.map(this.data.items, function() {

    });
    console.log(this.data.items);
    //Meteor.call('sendOrder', this.data.items, this.data.count)
  },

  render() {
    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              {this.data.items.map(function (result, id) {
                return (
                  <div className="card" key={id}>
                    <div className="item item-divider">{result.strain}
                      <span className="badge badge-balanced">{this.data.count[id]}</span>
                    </div>
                    <div className="item">
                      <span>${result.size[0]} / {result.size[1]} (g)</span>
                      <button className="button button-small button-assertive pull-right" onClick={this.removeItem} value={result._id}> Remove</button>
                    </div>
                  </div>
                )
              }, this)}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="button button-balanced button-full" onClick={this.prepOrder}>Send Order</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
