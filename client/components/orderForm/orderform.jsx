OrderForm = React.createClass({

  getInitialState() {
    let test = cartItem.get('order');
    let orderCart = [];
    let orderObject = _.assign({}, test);

    orderCart.push(orderObject);

    console.log(orderCart);

    return {
      cartData: test
    }

  },



  render() {

    let cart = this.state.cartData;

    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              <ul className="list">

              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
