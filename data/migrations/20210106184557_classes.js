exports.up = function (knex) {
  return knex.schema.createTable("classes", (tbl) => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.string("type", 128).notNullable();
    tbl.string("date", 128).notNullable();
    tbl.string("time", 128).notNullable();
    tbl.string("duration", 128).notNullable();
    tbl.string("intensity", 128).notNullable();
    tbl.string("location", 128).notNullable();
    tbl.integer("max_size").notNullable();
    tbl.integer("attendee_count").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes");
};
