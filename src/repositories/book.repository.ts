import Book from '../entities/book.interface'
import BookSchema from './schemas/book.schema'

class BookRepository {
  async create (book: Book) : Promise<Book> {
    return await new BookSchema(book).save()
  }

  async getBooks () : Promise<Book[] | undefined> {
    return await BookSchema.find({})
  }

  async getBookById (id:string) : Promise<Book | null | undefined> {
    return await BookSchema.findById(id)
  }

  async delete (id:string) : Promise<Book | null> {
    return await BookSchema.findByIdAndDelete(id)
  }

  async update (book:Book, id:string) : Promise<Book | null> {
    return await BookSchema.findByIdAndUpdate(id, book, { new: true })
  }
}

export default new BookRepository()
