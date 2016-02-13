OrderForm = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      data: cartItem
    }
  },

  getMeteorData() {
    let cart = Meteor.subscribe('Cart');
    return {
      cart: Cart.find({}).fetch()
    };
  },

  order(e) {
  },

  removeItem(e) {
    var newdata = parseInt(e.target.value, 10);
    this.setState((state) => {
      this.state.data.splice(newdata, 1);
      return {
        data: this.state.data
      }
    });

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
              {this.data.cart.map(function (result, id) {
                return (
                  <div className="card" key={id}>
                    <div className="item">{result.strain}
                      <span className="badge badge-balanced">{result.qty}</span>
                    </div>
                    <div className="item">
                      <div>{result.size[0]} / {result.size[1]}</div>
                      <button className="plus-button pull-right ion-minus-circled button button-outline button-assertive" onClick={this.removeItem} value={id}> </button>
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
