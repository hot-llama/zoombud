UserAccount = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      React.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <div ref="container"></div>;
  }
});