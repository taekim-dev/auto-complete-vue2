describe("Local Storag Test", () => {
  it("shold store and retrieve items from local storage", () => {
    const storageKey = "storage-key";
    const storageValue = "storage-value";

    localStorage.setItem(storageKey, storageValue);
    const retrievedValue = localStorage.getItem(storageKey);

    expect(retrievedValue).toBe(storageValue);
  });
});
