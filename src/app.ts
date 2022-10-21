import express from 'express'
import cors from 'cors'
import BaseController from './controllers/base.controller'
import Configuration from './config/config'
import ConfigModel from './config/config.model'

class App {
  private app: express.Application
  private config:ConfigModel
  constructor (controllers: BaseController[]) {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRoutes(controllers)
    this.config = new Configuration()
  }

  private initializeMiddlewares () : void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private initializeRoutes (controllers: BaseController[]) : void {
    controllers.forEach(controller => {
      this.app.use('/api/v1', controller.router)
    })
  }

  public listen () {
    this.app.listen(this.config.port, () => {
      console.log(`Server running at port:${this.config.port}`)
    })
  }
}

export default App
