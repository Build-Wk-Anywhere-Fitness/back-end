exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("password", 256).notNullable();
      tbl.string("role", 128).notNullable();
    })
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("type", 128).notNullable();
      tbl.string("start_time", 128).notNullable();
      tbl.string("duration", 128).notNullable();
      tbl.string("intensity_level", 128).notNullable();
      tbl.string("location", 128).notNullable();
      tbl.integer("attendee_count").notNullable();
      tbl.integer("max_class_size").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes").dropTableIfExists("users");
};
