OrderForm = React.createClass({

  getInitialState() {
    console.log(cartItem);

    return {
      data: cartItem
    }

  },

  order(e) {
    console.log('hello')
  },

  removeItem() {
    console.log('remove')
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
              {this.state.data.map(function (result, id) {
                return (
                  <div className="card" key={id}>
                    <div className="item">{result.strainName}
                      <span className="badge badge-balanced">{result.qty}</span>
                    </div>
                    <div className="item">
                      <div>{result.size[0]} / {result.size[1]}</div>
                      <button className="plus-button pull-right ion-minus-circled button button-outline button-assertive" onClick={this.removeItem}> </button>
                    </div>
                  </div>
                )
              })}
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
