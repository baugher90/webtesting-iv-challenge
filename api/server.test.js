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
        xit("should return JSON", async () => {});
        xit(`should return { message: "Welcome yo" }`, async () => {});
    });
});
});
