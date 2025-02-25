class Storage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ name, mail, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, name, mail, age, bio };
    this.id++;
  }

  getUser() {
    return Object.values(this.storage);
  }
}

module.exports = new Storage();
