const request = require("supertest");
const goatsRouter = require("./goatsRouter");

describe("goatsRouter.js", () => {
    describe("endpoints", () => {
        describe("get/", () => {
            it("should return 200 OK", async () => {
                const res = await request(goatsRouter).get("/");
                expect(res.status).toBe(200);
              });
        })
    })
})