import { Document } from 'mongoose'

interface Book extends Document {
    title: string
    author:string
    year:number
    isbn:string
}
export default Book
