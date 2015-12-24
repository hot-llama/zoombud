MenuButton = React.createClass({
  /**
   * Submits order to twilio service.
   */
  submitOrder() {
    //let order = Orders.findOne({}, {sort: {dateOrdered: -1}});
    //consuela.log(order);
    console.log(this.props.order);
  },

  render() {
    return (
      <button className={this.props.btnClass} type={this.props.btnType} onClick={this.submitOrder}>{this.props.btnText}</button>
    )
  }
})
