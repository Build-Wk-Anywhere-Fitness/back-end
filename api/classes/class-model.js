const db = require("../../data/dbConfig");

async function add(data) {
  const [id] = await db("classes").insert(data, "id");
  return findById(id);
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
  getAll,
  findBy,
  findById,
};
