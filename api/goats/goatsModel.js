const db = require('../../data/dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(goats) {
    const [id] = await db('goats').insert(goats,"id");
  return db('goats').where({ id}).first();
}

async function update(id, changes) {
    return db('goats')
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
    return db('goats')
    .where({ id })
    .del();
}

function getAll() {
    return db('goats');
}

function findById(id) {
    return db('goats')
    .select('id', 'name')
    .where({ id })
    .first();
}
