const request = require("supertest");
const server = require("../server");
const db = require("../../data/dbConfig");

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

describe("Endpoints", () => {
  describe("[GET] /classes", () => {
    it("Returns status code 404 if no classes", async () => {
      const res = await request(server).get("/classes");
      expect(res.status).toBe(404);
    });
  });
  describe("[GET] /classes/:id", () => {
    it("Returns status code 404 if no class with matching id", async () => {
      const res = await request(server).get("/classes/1");
      expect(res.status).toBe(404);
    });
  });
});
