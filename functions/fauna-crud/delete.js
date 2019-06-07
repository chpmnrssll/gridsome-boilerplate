const faunadb = require('faunadb');

// configure faunaDB Client with our secret
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;

exports.handler = async event => {
  const { id } = event;
  console.log(`Function 'delete' invoked. delete id: ${id}`);

  return client
    .query(q.Delete(q.Ref(`classes/items/${id}`)))
    .then(response => {
      console.log('success', response);

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      console.log('error', error);

      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
