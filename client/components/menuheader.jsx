MenuHeader = React.createClass({
  render() {
    return (
      <div className="bar bar-header">
        <UserAccount  />
        <h1 className="title">Zoombud</h1>
        <a href="/order" className="button icon ion-happy-outline bar-header__icon"> </a>
      </div>
    )
  }
})
