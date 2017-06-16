// UserManager.test.js

const UserManager = require('./UserManager');

describe('Testing user', ()=> {

  it('should be able to create user', () => {

    const newUser = {
      fullname: 'Chantal de La Conchetta',
      NIK: 12345
    };

    // stubs
    // faking a method of an object
    const fakeDb = {
      query: (queryString, callback) => {
        callback(null, newUser);
      }
    };

    // use an injected fakeDb
    const userManager = UserManager(fakeDb);
    userManager.createUser(newUser, (err, user) => {
      expect(user.id).toEqual(1);
      expect(user.NIK).toEqual(12345);
    });
  });
});