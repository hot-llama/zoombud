MenuButton = React.createClass({
  /**
   * Submits order to twilio service.
   */
  submitOrder() {
    var bobo = Session.get('order');
    console.log(bobo);
  },

  render() {
    return (
      <button className={this.props.btnClass} type={this.props.btnType} onClick={this.submitOrder}>{this.props.btnText}</button>
    )
  }
})
