MenuButton = React.createClass({
  submitOrder() {

  },

  render() {
    return (
      <button className={this.props.btnClass} type={this.props.btnType}>{this.props.btnText}</button>
    )
  }
})
