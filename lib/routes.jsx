FlowRouter.route('/', {
  action() {
    ReactLayout.render(Menu)
  }
});

FlowRouter.route('/order', {
  action() {
    ReactLayout.render(OrderForm)
  }
});