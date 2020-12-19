exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "instructor", password: "password", role: "instructor" },
        { username: "client", password: "password", role: "client" },
      ]);
    });
};
