StrainDetails = React.createClass({
	render() {
    let thumbnail = _.pluck(this.props.dataDetails.photos, 'thumb')[0];
    return (
			<div className="list card c-strain-card">
				<div className="item item-avatar c-strain-card__details stable-bg">
					<StrainThumb thumbsrc={thumbnail} />
					<p>{this.props.dataDetails.category}</p>
					<p>{this.props.dataDetails.rating} <img className="rating" src={this.props.dataDetails.starImage}/></p>
				</div>
			</div>
		)
	}
});