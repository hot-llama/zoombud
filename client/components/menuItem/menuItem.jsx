MenuItem = React.createClass({

	getInitialState() {
		return {
			isToggled: false,
			strainDetails: [],
      selected: "nothing selected"
		}
	},

  componentDidMount() {
    var price = _.first(this.props.data.price[0]);
    var qty = this.props.data.price[0][1];
    this._updateOnChange(`${price} / ${qty} (g)`);
  },

  _updateOnChange(value) {
    this.setState({selected: value})
  },

	_handleClick() {
		this.setState({
			isToggled: !this.state.isToggled
		});
		return this._getStrainDetails();
	},

	_getStrainDetails() {
		Meteor.call('getDetails', 'sour-diesel', (err, details) => {
			if (err) {
				throw new Meteor.Error('Details are a bitch', err);
			}
			this.state.isToggled ? this.setState({strainDetails: details}) : this.setState({strainDetails: ''});
		});
	},

	render() {
		var toggledClass = this.state.isToggled ? 'isActive' : '';

		return (
			<div className={`menuItem ${toggledClass}`}>
				<label className={`item item-input item-select`}>
					<div className="input-label" onClick={this._handleClick}>{this.props.data.name} <span
						className="icon ion-chevron-down"></span></div>
					<MenuForm onValueChange={this._updateOnChange} dataPrice={this.props.data.price}/>{this.state.selected}
        </label>
				<StrainDetails dataType={this.props.data.type} dataDetails={this.state.strainDetails}/>
			</div>
		)
	}
})