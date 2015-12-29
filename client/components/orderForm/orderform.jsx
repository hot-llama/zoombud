OrderForm = React.createClass({
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
                <li className="item">Item</li>
                <li className="item">Item</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
