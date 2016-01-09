/**
 * Users Collection already exists from auth
 * so no need to create it here.
 */
Orders = new Mongo.Collection("Orders");
Cart = new Mongo.Collection("Cart");
_ = lodash;

cartItem = new ReactiveArray();

consuela = function consuela() {};

consuela.log = (prop, ...more)=> {
  return console.log(prop, more, 'yeeees');
};