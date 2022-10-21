import { Schema, model, Document } from 'mongoose'
import Book from '../entities/book.interface'

const bookSchema = new Schema({
  title: String,
  author: String,
  year: Number,
  isbn: String
})

const BookModel = model<Book & Document>('books', bookSchema)

export default BookModel
