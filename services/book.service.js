'use strict'

import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
  query,
  get,
  remove,
  save,
  getEmptyCar: getEmptyBook,
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      books = books.filter((book) => regex.test(book.name))
    }
    if (filterBy.minSpeed) {
      books = books.filter((book) => book.maxPrice >= filterBy.minPrice)
    }
    return books
  })
}

function get(bookId) {
  return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
  return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOK_KEY, book)
  } else {
    return storageService.post(BOOK_KEY, book)
  }
}

function getEmptyBook(name = '', maxPrice = 0) {
  return { id: '', name, maxPrice }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []
    books.push(_createBook('puki', 300))
    books.push(_createBook('loli', 120))
    books.push(_createBook('shraga', 100))
    books.push(_createBook('toti', 150))
    books.push(_createBook('dharly', 300))
    books.push(_createBook('bobie', 300))
    books.push(_createBook('shuki', 300))
    books.push(_createBook('chacha', 300))
    books.push(_createBook('yuyu', 300))
    books.push(_createBook('adventure', 300))
    books.push(_createBook('money', 300))
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createBook(name, maxPrice = 250) {
  const book = getEmptyBook(name, maxPrice)
  book.id = utilService.makeId()
  book.desc = utilService.makeLorem()
  book.subtitle = 'mi est eros dapibus himenaeos'
  book.authors = ['Barbara Cartland']
  book.publishedDate = 1999
  book.pageCount = 700
  book.categories = ['Computers', 'Hack']
  book.language = 'en'
  return book
}
// "title": "metus hendrerit",
// "subtitle": "mi est eros dapibus himenaeos",
// "authors": [ "Barbara Cartland" ],
// "publishedDate": 1999,
// "description": "placerat nisi sodales suscipit tellus",
// "pageCount": 713,
// "categories": [ "Computers", "Hack" ],
// "thumbnail": "http://ca.org/books-photos/20.jpg",
// "language": "en",
// "listPrice": {
// "amount": 109,
// "currencyCode": "EUR",
// "isOnSale": false
// }
