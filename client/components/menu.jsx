Menu = React.createClass({

	getInitialState() {
		return {
			menu: [],
			modal: false
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

  ionModal(tab) {
    this.setState({
      modal: (
        <IonModal>
          <div className="h1 title">{tab}</div>
          <button onClick={ () => this.setState({modal:false}) } className="button button-icon active">
            <i className="icon ion-ios-close-empty"> </i>
          </button>
        </IonModal>
      )
    })
  },

  render() {
		let menu = this.state.menu;

		return (
			<div className="padding ionic-body">
        {this.state.modal}
        <MenuHeader />

				<div className="content-wrapper">
					<div className="content">
						<div className="row">
							<div className="col">
								<button onClick={this.ionModal.bind(null, this)}>Test</button>
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
