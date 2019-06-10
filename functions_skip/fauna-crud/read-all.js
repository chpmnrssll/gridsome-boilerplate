const faunadb = require('faunadb');

// configure faunaDB Client with our secret
const client = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;

exports.handler = async () => {
  console.log('Function `read-all` invoked');

  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_items'))))
    .then(response => {
      const itemRefs = response.data;
      // create new query out of item refs. http://bit.ly/2LG3MLg
      const getAllItemsDataQuery = itemRefs.map(ref => q.Get(ref));

      // then query the refs
      return client.query(getAllItemsDataQuery).then(ret => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret),
        };
      });
    })
    .catch(error => {
      console.log('error', error);

      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
