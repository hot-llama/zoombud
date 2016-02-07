Menu = React.createClass({

	getInitialState() {
		return {
			menu: []
		};
	},

	componentWillMount() {
		Meteor.call('getMenu', (err, menu) => {
			if (err) {
				throw new Meteor.Error('getMenu Error', err);
			}
			return this.setState({menu: menu.data})
		});
	},

  render() {
		let menu = this.state.menu;
		return (
			<div className="padding ionic-body">
        <MenuHeader />
				<div className="content-wrapper">
					<div className="content">
						<div className="row">
							<div className="col">
								<MenuList menu={menu} />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<MenuButton btnClass={'button button-balanced button-full'} btnType={'submit'} btnText={'Submit'} route="/order"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});
