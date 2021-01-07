exports.seed = function (knex) {
  return knex("classes")
    .truncate()
    .then(function () {
      return knex("classes").insert([
        {
          name: "Meditation",
          type: "Mindfulness",
          date: "01/01/2021",
          time: "10:00 AM",
          duration: "30",
          intensity: "low",
          location: "Piedmont Park",
          max_size: 25,
          attendee_count: 0,
        },
        {
          name: "Yoga",
          type: "Mind-body",
          date: "01/01/2021",
          time: "12:00 PM",
          duration: "60",
          intensity: "medium",
          location: "Gold's Gym",
          max_size: 15,
          attendee_count: 0,
        },
      ]);
    });
};
