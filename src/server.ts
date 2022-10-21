import BookController from './controllers/book.controller'
import validateEnv from './utilities/validate.env'
import App from './app'

// validateEnv()

const controllers = [
  new BookController()
]

const app = new App(controllers)

app.listen()
