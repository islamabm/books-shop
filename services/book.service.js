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
  getEmptyCar,
}

function query(filterBy = {}) {
  return storageService.query(BOOK_KEY).then((books) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      books = books.filter((book) => regex.test(book.name))
    }
    if (filterBy.minSpeed) {
      books = books.filter((book) => car.maxPrice >= filterBy.minPrice)
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

function getEmptyCar(name = '', maxPrice = 0) {
  return { id: '', name, maxPrice }
}

function _createBooks() {
  let books = utilService.loadFromStorage(BOOK_KEY)
  if (!books || !books.length) {
    books = []
    books.push(_createCar('puki', 300))
    books.push(_createCar('loli', 120))
    books.push(_createCar('shraga', 100))
    books.push(_createCar('toti', 150))
    utilService.saveToStorage(BOOK_KEY, books)
  }
}

function _createCar(name, maxPrice = 250) {
  const book = getEmptyCar(name, maxPrice)
  book.id = utilService.makeId()
  return book
}
