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

  render() {
    return (
      <div className="padding ionic-body">
        <MenuHeader />

        <div className="content-wrapper">
          <a className="button icon-left ion-chevron-left button-clear button-dark" href="/">Back</a>
          <h1>Cart</h1>
          <div className="row">
            <div className="col">
              <ul className="list">
                {this.state.data.map(function (result, id) {
                  return <li className="item" key={id}>{result.strainName} {result.size[0]} / {result.size[1]} <span className="badge badge-balanced">{result.qty}</span></li>
                })}
              </ul>
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
