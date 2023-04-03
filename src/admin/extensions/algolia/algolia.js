const algoliasearch = require('algoliasearch');
const client = algoliasearch(
  'DDGZ0TRD7Y',
  '95b40f386d1c122f31241bf07e326d5c'
);

const index = client.initIndex('dev_hosterbrains');

module.exports = {
  client,
  index,
};