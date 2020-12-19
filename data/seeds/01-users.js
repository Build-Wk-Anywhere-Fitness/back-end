exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        { username: "Instructor", password: "password", role: "instructor" },
        { username: "Client", password: "password", role: "client" },
      ]);
    });
};
