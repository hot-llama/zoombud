Menu = React.createClass({

	getInitialState() {
		return {
			menu: [],
			itemsCount: 0
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
		let items = this.state.itemsCount;
		return (
			<div className="padding ionic-body">
        <MenuHeader itemsCount={items} />
				<div className="content-wrapper">
					<div className="content">
						<div className="row">
							<div className="col">
								<MenuList menu={menu} itemsCount={items} />
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
