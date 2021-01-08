const db = require("../../data/dbConfig");

async function add(data) {
  const [id] = await db("classes").insert(data, "id");
  return findById(id);
}

function edit(id, changes) {
  return db("classes").where({ id }).update(changes);
}

function remove(id) {
  return db("classes").where({ id }).del();
}

function getAll() {
  return db("classes");
}

function findBy(filter) {
  return db("classes").where(filter).orderBy("id");
}

function findById(id) {
  return db("classes").where({ id }).first();
}

module.exports = {
  add,
  edit,
  remove,
  getAll,
  findBy,
  findById,
};
