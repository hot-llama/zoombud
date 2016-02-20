OrderForm = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('Cart');

    return {
      cart: Cart.find({}).fetch()
    };
  },

  removeItem(e) {
    Meteor.call('removeCartItem', e.target.value);
  },

  groupItems() {

  },

  itemCount() {

  },

  render() {

    {var newgroup = _.groupBy(this.data.cart,"SKU");}
    var test = _.forIn(newgroup,(value, key) => { return value.length });
    console.log(test);


    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              {this.data.cart.map(function (result, id) {
                return (
                  <div className="card" key={id}>
                    <div className="item">{result.strain} {result.SKU}
                      <span className="badge badge-balanced">{result.qty}</span>
                    </div>
                    <div className="item">
                      <div>{result.size[0]} / {result.size[1]}</div>
                      <button className="plus-button ion-minus-circled button button-outline button-assertive" onClick={this.removeItem} value={result._id}> </button>
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
