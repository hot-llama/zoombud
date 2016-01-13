MenuButton = React.createClass({
  render() {
    return (
      <a href={this.props.route} className={this.props.btnClass} type={this.props.btnType}>{this.props.btnText}
      </a>
    )
  }
})
