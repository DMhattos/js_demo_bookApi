import { Request, Response, Router } from 'express'
import Book from '../entities/book.interface'
import BookRepository from '../repositories/book.repository'
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
    this.router.get(this.path, this.getBooks)
    this.router.post(this.path, this.createBook)
    this.router.delete(`${this.path}/id=:id`, this.deleteBook)
    this.router.put(`${this.path}/id=:id`, this.updateBook)
  }

  private async getBooks (req: Request, res:Response) {
    BookRepository.getBooks().then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
  }

  private createBook (req:Request, res:Response) {
    const book: Book = req.body
    BookRepository.create(book).then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
  }

  private updateBook (req:Request, res:Response) {
    const id = req.params.id
    const book: Book = req.body

    BookRepository.update(book, id)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        res.json(err)
      })
  }

  private deleteBook (req: Request, res: Response) {
    const id = req.params.id
    BookRepository.delete(id)
      .then(result => {
        res.json(result)
      }).catch(err => {
        res.json(err)
      })
  }
}

export default BookController
