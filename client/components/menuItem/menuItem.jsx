MenuItem = React.createClass({
  getInitialState() {
    return {
      isToggled    : false,
      strainDetails: [],
      selected     : "nothing selected"
    }
  },

  updateOnChange(value) {
    this.setState({selected: value})
  },

  handleClick() {
    this.setState({
      isToggled: !this.state.isToggled
    });
    return this.getStrainDetails();
  },

  getStrainDetails() {
    Meteor.call('getDetails', 'sour-diesel', (err, details) => {
      if (err) {
        throw new Meteor.Error('Details are a bitch', err);
      }
      this.state.isToggled ? this.setState({strainDetails: details}) : this.setState({strainDetails: ''});
    });
  },

  render() {
    let toggledClass = this.state.isToggled ? 'isActive' : '';

    return (
      <div className={`menuItem ${toggledClass}`}>
        <label className={`item item-input item-select`}>
          <div className="input-label" onClick={this.handleClick}>{this.props.data.name} <span
            className="icon ion-chevron-down"> </span></div>
          <MenuForm onValueChange={this.updateOnChange}
            dataPrice={this.props.data.price}
            strainName={this.props.data.name}
            SKU={this.props.data.SKU}
           />
        </label>
        <StrainDetails dataType={this.props.data.type} dataDetails={this.state.strainDetails}/>
      </div>
    )
  }
});