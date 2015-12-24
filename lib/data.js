MenuData = new Mongo.Collection('MenuData');
Orders = new Mongo.Collection("Orders");
_ = lodash;

consuela = function consuela() {}

consuela.log = (prop, ...more)=> {
  return console.log(prop, more, 'yeeees');
}