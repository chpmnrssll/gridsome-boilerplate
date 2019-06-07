/* eslint no-useless-escape: off */
/* eslint no-param-reassign: off */
const readAll = require('./read-all');
const read = require('./read');
const create = require('./create');
const update = require('./update');
const deleteInc = require('./delete');

exports.handler = async (event, context) => {
  const path = event.path.replace(/\.netlify\/functions\/[^\/]+/, '');
  const segments = path.split('/').filter(e => e);

  switch (event.httpMethod) {
    case 'GET':
      // e.g. GET /.netlify/functions/fauna-crud
      if (segments.length === 0) {
        return readAll.handler(event, context);
      }
      // e.g. GET /.netlify/functions/fauna-crud/123456
      if (segments.length === 1) {
        [event.id] = segments;
        return read.handler(event, context);
      }
      return {
        statusCode: 500,
        body:
          'too many segments in GET request, must be either /.netlify/functions/fauna-crud or /.netlify/functions/fauna-crud/123456',
      };

    case 'POST':
      // e.g. POST /.netlify/functions/fauna-crud with a body of key value pair objects, NOT strings
      return create.handler(event, context);

    case 'PUT':
      // e.g. PUT /.netlify/functions/fauna-crud/123456 with a body of key value pair objects, NOT strings
      if (segments.length === 1) {
        [event.id] = segments;
        return update.handler(event, context);
      }
      return {
        statusCode: 500,
        body: 'invalid segments in POST request, must be /.netlify/functions/fauna-crud/123456',
      };

    case 'DELETE':
      // e.g. DELETE /.netlify/functions/fauna-crud/123456
      if (segments.length === 1) {
        [event.id] = segments;
        return deleteInc.handler(event, context);
      }
      return {
        statusCode: 500,
        body: 'invalid segments in DELETE request, must be /.netlify/functions/fauna-crud/123456',
      };

    default:
      return {
        statusCode: 500,
        body: 'unrecognized HTTP Method, must be one of GET/POST/PUT/DELETE',
      };
  }
};
