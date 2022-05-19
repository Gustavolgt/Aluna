import faunadb from 'faunadb';

const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
  domain: 'db.us.fauna.com',
});

export default faunaClient;
