MenuHeader = React.createClass({

  getInitialState() {
    return {
      data: cartItem
    }
  },

  render() {
    console.log(this.state.data);

    return (
      <div className="bar bar-header">
        <UserAccount  />
        <h1 className="title">Zoombud</h1>
        <a href="/order" className="button icon ion-ios-cart bar-header__icon"> <span className="badge badge-balanced">{this.state.data.length}</span></a>
      </div>
    )
  }
})
