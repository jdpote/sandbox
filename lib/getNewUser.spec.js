const getNewUser = require("./getNewUser");

describe("getNewUser", () => {
  test("user does exist", async () => {
    const user = await getNewUser(1);

    expect(user).toBeTruthy();
    expect(user.verified).toBe(false);
  });

  test("user does not exist", async () => {
    expect.assertions(1);

    try {
      await getNewUser(3);
    } catch (e) {
      expect(e.message).toBe("User does not exist");
    }
  });
});
