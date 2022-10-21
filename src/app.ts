import express from 'express'
import cors from 'cors'
import BaseController from './controllers/base.controller'
import Configuration from './config/config'
import ConfigModel from './config/config.model'
import mongoose from 'mongoose'

class App {
  private app: express.Application
  private config:ConfigModel
  constructor (controllers: BaseController[]) {
    this.app = express()
    this.config = new Configuration()

    this.initializeDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes(controllers)
  }

  // Initialized middlewares
  private initializeMiddlewares () : void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  // Initialize Routes of controllers
  private initializeRoutes (controllers: BaseController[]) : void {
    controllers.forEach(controller => {
      this.app.use('/api/v1', controller.router)
    })
  }

  // Connect to database
  private initializeDatabase (): void {
    mongoose.connect(`mongodb://localhost:27017/${this.config.dbName}`, {
      auth: {
        username: this.config.dbUser,
        password: this.config.dbPass
      },
      authSource: 'admin'
    }).then(() => {
      console.log('Successfully conneted to db')
    }).catch(() => {
      console.log('Fail to connected to db')
    })
  }

  // Listen server
  public listen () {
    this.app.listen(this.config.port, () => {
      console.log(`Server running at port:${this.config.port}`)
    })
  }
}

export default App
