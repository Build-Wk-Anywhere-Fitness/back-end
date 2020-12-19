const db = require("../../data/dbConfig");

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function getAll() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}

module.exports = {
  add,
  remove,
  getAll,
  findBy,
  findById,
};
