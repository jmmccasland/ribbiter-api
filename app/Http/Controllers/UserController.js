'use strict'

class UserController {

  * index(request, response) {
    // finds all users ???
    const users = yield User.all();

    // Sends info
    response.json(users);
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    // requests json data for email, username, and password?
    const { email, username, password } = request.only('email', 'username', 'password');

    // creates user in the database and hashes pw
    const user = yield User.create({ email, username, password: yield Hash.make(password) });

    // Sends it in json form
    response.json(user);
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = UserController
