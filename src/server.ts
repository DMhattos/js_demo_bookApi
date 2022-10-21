import BookController from './controllers/book.controller'

import App from './app'

const controllers = [
  new BookController()
]

const app = new App(controllers)

app.listen()
