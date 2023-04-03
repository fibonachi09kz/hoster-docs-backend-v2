const { index } = require('./algolia');
const strapi = require('./strapi');

async function addDataToAlgolia() {
    const { data } = await strapi.get('/projects');
    const records = data.data.map(item => ({
      objectID: item.id,
      ...item,
    }));

    await index.saveObjects(records);
}

module.exports = addDataToAlgolia;