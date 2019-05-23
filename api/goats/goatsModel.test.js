const db = require("../../data/dbConfig");
const Goats = require("./goatsModel");

describe("goatsModel", () => {
    beforeEach(async () => {
        await db("goats").truncate();
      });
  describe("insert()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
    it("should insert the provided goatss into the db", async () => {
        await Goats.insert({ name: "Alfrodo Bagget"});
        await Goats.insert({ name: "Sammwich Hamgee"});

        const goats = await db('goats');
        expect(goats).toHaveLength(2);
    });
  });

  describe("update()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
  });

//   describe("remove()", () => {
//     beforeEach(async () => {
//       await db("goats").truncate();
//     });
//     it("should remove the record", async () => {
//       await Goats.insert({ name: "Pipin Roni" });
//       const goats = await db("goats");
//       expect(goats).toHaveLength(1);
//       await Goats.remove(goats[0].id);
//       const deletedGoats = await db("goats");
//       expect(deletedGoats).not.toHaveLength(1);
//     });
//   });

  describe("getAll()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
  });

  describe("findById()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
  });
});
