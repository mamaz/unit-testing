// UserManager.js

module.exports = (db) => {
  if(!db) throw new Error('No db connector specified');

  return {
    createUser: (userInfo, callback) => {
      db.query("INSERT INTO User ...", callback);
    }
  }
}
