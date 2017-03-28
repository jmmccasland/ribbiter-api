'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const fetch = require('node-fetch');

// Route.on('/').render('welcome')


Route.post('/users', 'UserController.store');
Route.get('/users', 'UserController.store');
Route.post('/login', 'UserController.store');
