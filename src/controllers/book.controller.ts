import { Request, Response, Router } from 'express'
import BaseController from './base.controller'

class BookController implements BaseController {
  path: string
  router: Router
  constructor () {
    this.path = '/book'
    this.router = Router()
    this.routes()
  }

  private routes () : void {
    this.router.get(this.path, this.getAll)
  }

  private async getAll (req: Request, res:Response) {
    res.json({ res: req.originalUrl })
  }
}

export default BookController
