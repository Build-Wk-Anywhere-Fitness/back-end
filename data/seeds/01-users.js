exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "admin", password: "1234", role: "instructor" },
        { username: "user", password: "1234", role: "client" },
      ]);
    });
};
