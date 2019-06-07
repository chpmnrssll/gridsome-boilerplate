#!/usr/bin/env node
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

/* sync GraphQL schema to your FaunaDB account - use with `netlify dev:exec <path-to-this-file>` */
function createFaunaGraphQL() {
  if (!process.env.FAUNADB_SERVER_SECRET) {
    console.log('No FAUNADB_SERVER_SECRET in environment, skipping DB setup');
  }
  console.log('Uploading GraphQL Schema!');

  // name of your schema file
  const schema = fs.readFileSync(path.join(__dirname, 'schema.graphql')).toString();

  // encoded authorization header similar to https://www.npmjs.com/package/request#http-authentication
  const Authorization = Buffer.from(`${process.env.FAUNADB_SERVER_SECRET}:`).toString('base64');

  const options = {
    method: 'POST',
    body: schema,
    headers: { Authorization },
  };

  fetch('https://graphql.fauna.com/import', options)
    // // uncomment for debugging
    .then(res => res.text())
    .then(body => {
      console.log('Netlify Functions:Create - `fauna-graphql/sync-schema.js` success!');
      console.log(body);
    })
    .catch(err => console.error('something bad happened: ', { err }));
}

createFaunaGraphQL();
