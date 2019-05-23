const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  it(`should set the testing enviroment`, () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("endpoints", () => {
    describe("GET /", () => {
      //test for res.status
      it("should return 200 OK", async () => {
        const res = await request(server).get("/");
        expect(res.status).toBe(200);
      });
      it("should return JSON", async () => {
        const res = await request(server).get("/");
        expect(res.type).toBe("application/json");
      });
      it(`should return { message: "Welcome yo" }`, async () => {
        const res = await request(server).get("/");
        expect(res.body).toEqual({ message: "Welcome yo" });
      });
    });
  });
});
