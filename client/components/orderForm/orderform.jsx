OrderForm = React.createClass({

  getInitialState() {

    console.log(cartItem);

    return {
      data: cartItem
    }

  },

  render() {

    const cart = this.state.data;

    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              <ul className="list">
                {cart.map(function (result, id) {
                  return <li key={id}>{result.strainName}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
