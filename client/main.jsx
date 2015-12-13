Meteor.subscribe('Menu');

Meteor.startup(() => {
    React.render(<Menu />, document.getElementById('app'))
});