OrderForm = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      cartData: Cart.find({}).fetch()
    }
  },

  getMeteorData() {
    return {
      cart: this.state.cartData
    }
  },

  render() {

    {console.log(this.state.cartData)}

    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              <ul className="list">
                {this.data.cart.map(function (result, id) {
                  return  <li className="item" key={id}>{result.strain} <span className="badge badge-assertive">{result.qty}</span></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
