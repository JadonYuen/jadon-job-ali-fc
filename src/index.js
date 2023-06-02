'use strict';

exports.handler = (event, context, callback) => {
  console.log('Hello World!');
  console.log(event);
  console.log(context);
  callback(null, 'Hello World!');
}