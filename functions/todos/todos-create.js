const faunadb = require('faunadb');

// configure faunaDB Client with our secret
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

// export our lambda function as named "handler" export
exports.handler = async (event, context, callback) => {
  // parse the string body into a useable JS object
  const data = JSON.parse(event.body);
  const todoItem = { data };
  console.log('Function `todo-create` invoked', data);

  // construct the fauna query
  return client
    .query(faunadb.query.Create(faunadb.query.Ref('classes/todos'), todoItem))
    .then(response => {
      console.log('success', response);

      // Success! return the response with statusCode 200
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch(error => {
      console.log('error', error);

      // Error! return the error with statusCode 400
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
