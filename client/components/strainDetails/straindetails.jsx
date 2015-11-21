StrainDetails = React.createClass({
	render() {
		var thumbnail = _.pluck(this.props.dataDetails.photos, 'thumb');

		return (
			<div className="list card c-strain-card">
				<div className="item item-avatar c-strain-card__details stable-bg">
					<img src={thumbnail[0]} alt="leafly image"/>
					<p>{this.props.dataDetails.category}</p>
					<p>{this.props.dataDetails.rating} <img className="rating" src={this.props.dataDetails.starImage}/></p>
				</div>
			</div>
		)
	}
})