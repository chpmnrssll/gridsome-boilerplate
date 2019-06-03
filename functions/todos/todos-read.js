const faunadb = require('faunadb');
const getId = require('./utils/getId');

const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });

exports.handler = async (event, context, callback) => {
  const id = getId(event.path);
  console.log(`Function 'todo-read' invoked. Read id: ${id}`);

  return client
    .query(faunadb.query.Get(faunadb.query.Ref(`classes/todos/${id}`)))
    .then(response => {
      console.log('success', response);

      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch(error => {
      console.log('error', error);

      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};