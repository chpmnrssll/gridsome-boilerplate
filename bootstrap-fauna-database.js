// bootstrap database in your FaunaDB account

const chalk = require('chalk');
const faunadb = require('faunadb');
const readline = require('readline');

// Readline util
function ask(question, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(`${question}\n`, answer => {
    rl.close();
    callback(null, answer);
  });
}

// idempotent operation
function createFaunaDB(key) {
  console.log('Create the database!');

  const client = new faunadb.Client({ secret: key });

  // Based on your requirements, change the schema here
  return client
    .query(faunadb.query.Create(faunadb.query.Ref('classes'), { name: 'todos' }))
    .then(() => {
      return client.query(
        faunadb.query.Create(faunadb.query.Ref('indexes'), {
          name: 'all_todos',
          source: faunadb.query.Ref('classes/todos'),
        }),
      );
    })
    .catch(e => {
      // Database already exists
      if (e.requestResult.statusCode === 400 && e.message === 'instance not unique') {
        console.log('DB already exists');
        throw e;
      }
    });
}

function bootstrapDB() {
  console.log(chalk.cyan('Creating your FaunaDB Database...\n'));

  // Check for required enviroment variables
  if (process.env.FAUNADB_SERVER_SECRET) {
    createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
      console.log('Database created');
    });
  } else {
    console.log(chalk.yellow('Required FAUNADB_SERVER_SECRET enviroment variable not found.'));

    // Test if inside netlify build context
    if (process.env.DEPLOY_PRIME_URL) {
      console.log(`Visit https://app.netlify.com/sites/YOUR_SITE_HERE/settings/deploys`);
      console.log(
        'and set a `FAUNADB_SERVER_SECRET` value in the "Build environment variables" section',
      );
      process.exit(1);
    } else {
      // Local machine warning
      console.log('\nYou can create fauna DB keys here: https://dashboard.fauna.com/db/keys\n');

      ask(chalk.bold('Enter your faunaDB server key'), (err, answer) => {
        if (err) {
          console.log('err', err);
        }

        if (!answer) {
          console.log('Please supply a faunaDB server key');
          process.exit(1);
        }

        createFaunaDB(process.env.FAUNADB_SERVER_SECRET).then(() => {
          console.log('Database created');
        });
      });
    }
  }
}

bootstrapDB();
