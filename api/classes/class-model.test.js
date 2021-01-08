const Class = require("../classes/class-model");
const db = require("../../data/dbConfig");

const class1 = {
  name: "Meditation",
  type: "Mindfulness",
  date: "01/01/2021",
  time: "10:00 AM",
  duration: "30",
  intensity: "low",
  location: "Piedmont Park",
  max_size: 25,
  attendee_count: 0,
};

const class2 = {
  name: "Yoga",
  type: "Mind-body",
  date: "01/01/2021",
  time: "12:00 PM",
  duration: "60",
  intensity: "medium",
  location: "Gold's Gym",
  max_size: 15,
  attendee_count: 0,
};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("classes").truncate();
});

afterAll(async () => {
  await db.destroy();
});

describe("Class model", () => {
  it("Class.getAll returns empty array if no classes", async () => {
    const result = await Class.getAll();
    expect(result).toHaveLength(0);
  });
  it("Class.getAll returns classes", async () => {
    await db("classes").insert(class1);
    await db("classes").insert(class2);
    const result = await Class.getAll();
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty("name", "Meditation");
    expect(result[1]).toHaveProperty("name", "Yoga");
  });
});
