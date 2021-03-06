const faunadb = require('faunadb');

// configure faunaDB Client with our secret
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;

// export our lambda function as named "handler" export
exports.handler = async event => {
  // parse the string body into a useable JS object
  const data = JSON.parse(event.body);
  const item = { data };
  console.log('Function `create` invoked', data);

  // construct the fauna query
  return client
    .query(q.Create(q.Ref('classes/items'), item))
    .then(response => {
      console.log('success', response);
      // Success! return the response with statusCode 200

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      console.log('error', error);
      // Error! return the error with statusCode 400

      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
