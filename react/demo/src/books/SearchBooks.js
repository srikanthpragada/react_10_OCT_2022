import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { BOOKS_URL } from './constants'

export default function SearchBooks() {
    const [books, setBooks] = useState([])
    const [selectedBooks, setSelectedBooks] = useState([])
    const [searchText, setSearchText] = useState()
    const [done, setDone] = useState(false)

    useEffect(function () {
        getBooks();
    }, []
    )

    function getBooks() {
        $.get(BOOKS_URL,
            (result) => {
                setBooks(result)
            }
        ) // get
    }

    function changeValue(event) {
        setSearchText(event.target.value)
    }

    function searchBooks() {
        setSelectedBooks(books.filter((book) => book.title.includes(searchText)))
        setDone(true)
    }

    return (
        <>
            <h3>Search Books</h3>
            Title <input type="text" value={searchText} onChange={changeValue} />
            <button onClick={searchBooks}>Search</button>
            <p></p>
            
            {done && selectedBooks.length > 0 ?
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedBooks.map((book) =>
                                <tr key={book.id}>
                                    <td>{book.title} </td>
                                    <td>{book.author}</td>
                                    <td>{book.price}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                : done ? <h5>Sorry!! No books found</h5> : ''
            }

        </>
    )
}
