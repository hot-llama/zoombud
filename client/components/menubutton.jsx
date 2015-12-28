MenuButton = React.createClass({
  /**
   * Submits order to twilio service.
   *
   */
  submitOrder() {
    //let order = Orders.findOne({}, {sort: {dateOrdered: -1}});
    //consuela.log(order);
    console.log(this.props.order);
  },

  render() {
    return (
      <a href={this.props.route} className={this.props.btnClass} type={this.props.btnType}>{this.props.btnText}
      </a>
    )
  }
})
