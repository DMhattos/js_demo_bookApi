import express from 'express'
import cors from 'cors'
import BaseController from './controllers/base.controller'

class App {
  private app: express.Application
  constructor (controllers: BaseController[]) {
    this.app = express()
    this.initializeMiddlewares()
    this.initializeRoutes(controllers)
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

  public listen (port: number) {
    this.app.listen(port, () => {
      console.log(`Server running at port:${port}`)
    })
  }
}

export default App
