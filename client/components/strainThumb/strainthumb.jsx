StrainThumb = React.createClass({
  render() {
    if(!this.props.thumbsrc) {
      return <div>loading...</div>
    }
    return(
      <img src={this.props.thumbsrc} alt="leafly image" />
    )
  }
});