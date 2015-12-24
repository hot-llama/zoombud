MenuData = new Mongo.Collection('MenuData');
Orders = new Mongo.Collection("Orders");
_ = lodash;

consuela = function consuela() {}

consuela.log = (prop)=> {
  return console.log(prop, 'yeeees');
}