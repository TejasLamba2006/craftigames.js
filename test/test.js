const assert = require("node:assert");
const lib = require("../lib");
describe("JartexNetwork", () => {
  const jartex = new lib.JartexNetwork();
  describe("#getCount", () => {
    it("ip must return play.jartexnetwork.com", async () => {
      const count = await jartex.getCount();
      assert.equal(count?.ip, "play.jartexnetwork.com");
    });
  });
  describe("#getProfileLeaderboard", () => {
    it("metadata total must be a number", async () => {
      const obj = await jartex.getProfileLeaderboard({
        gamemode: lib.JartexNetworkGamemode.BedWars,
        username: "TejasIsPro",
      });
      assert.strictEqual(typeof obj?.Kills.metadata.total, "number");
    });
  });
  describe("#getProfile", () => {
    it("username should be TejasIsPro", async () => {
      const obj = await jartex.getProfile("TejasIsPro");
      assert.strictEqual(obj?.username, "TejasIsPro");
    });
  });
  describe("#getLeaderboard", () => {
    it("bedwars lb total kills must be a number", async () => {
      const obj = await jartex.getLeaderboard({
        gamemode: lib.JartexNetworkGamemode.BedWars,
        leaderboardType: lib.JartexNetworkLeaderboardType.Kills,
      });
      assert.strictEqual(typeof obj?.metadata.total, "number");
    });
  });
  describe("#getTotalLeaderboard", () => {
    it("bedwars total lb total must be a number", async () => {
      const obj = await jartex.getTotalLeaderboard(lib.JartexNetworkGamemode.BedWars);
      assert.strictEqual(typeof obj?.[0]?.total, "number");
    });
  });
  describe("#getGuild", () => {
    it("clan name must be BloodLust", async () => {
      const obj = await jartex.getGuild("BloodLust");
      assert.strictEqual(obj.name, "BloodLust");
    });
  });
});
