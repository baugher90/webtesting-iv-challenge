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
    it("should insert the provided goats into the db", async () => {
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
    it("should update the provided goat in the db", async () => {
        let goat = await Goats.insert({ name: "Brandy Marinade"})
        expect(goat.name).toBe('Brandy Marinade')
        let updatedGoat = { id: goat.id, name: "Brandy Wine"}
        await Goats.update(goat.id, updatedGoat);
        await Goats.findById(goat.id).then(res => {
            expect(res.name).toBe(updatedGoat.name)
        })
    })
  });

  describe("remove()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
    it("should remove the record", async () => {
      await Goats.insert({ name: "Pipin Roni" });
      const goats = await db("goats");
      expect(goats).toHaveLength(1);
      await Goats.remove(goats[0].id);
      const deletedGoats = await db("goats");
      expect(deletedGoats).not.toHaveLength(1);
    });
  });

  describe("getAll()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
    it("should get all goats in the database", async () => {
        await Goats.insert({ name: "Pipin Roni" });
        const database = await db("goats");
        const getAll = await Goats.getAll('goats');
        expect(getAll).toEqual(database);
    })
  });

  describe("findById()", () => {
    beforeEach(async () => {
      await db("goats").truncate();
    });
    it("should find the goat with the given id", async () => {
        const goat = await Goats.insert({ name: "Pipin Roni" });
        const findById = await Goats.findById(goat.id);
        expect(findById).toEqual(goat);
    })
  });
});
