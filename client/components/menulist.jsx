MenuList = React.createClass({
  render() {
    var orderCart = this.props.cart;

    return (
      <div className="list">
        {this.props.menu.map(function (result, id) {
          return <MenuItem key={id} data={result} cart={orderCart}/>
        })}
      </div>
    )
  }
});