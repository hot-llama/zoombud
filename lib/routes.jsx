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
//@TODO: get data into routes