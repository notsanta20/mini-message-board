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

  searchUser(user) {
    const data = Object.values(this.storage);
    if (data.length === 0) {
      return false;
    } else {
      const filtered = data.filter((d) => d.name === user);
      return filtered ? filtered[0] : false;
    }
  }
}

module.exports = new Storage();
