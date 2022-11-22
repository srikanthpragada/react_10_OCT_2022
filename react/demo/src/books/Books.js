import React from "react";
import ListBooks from "./ListBooks";
import AddBook from "./AddBook"
import BookDetails from "./BookDetails"
import ListAuthors from './ListAuthors'
import SearchBooks from './SearchBooks'
import EditBook from "./EditBook"

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";



export default function Books() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ListBooks />} />
                    <Route path="list" element={<ListBooks />} />
                    <Route path="add" element={<AddBook />} />
                    <Route path="authors" element={<ListAuthors />} />
                    <Route path="search" element={<SearchBooks />} />
                    <Route path="edit/:bookId" element={<EditBook />} />
                    <Route path="details/:bookId" element={<BookDetails />} />
                    <Route path="*" element={
                        <h3>Sorry! Page Not Found!!!</h3>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


function Layout() {
    return (
        <div className="container">
            <h2>Books</h2>
            <nav className="nav navbar-expand-sm bg-danger">
                <Link className="nav-link text-white" to="/list">List</Link>
                <Link className="nav-link text-white" to="/search">Search Books</Link>
                <Link className="nav-link text-white" to="/authors">Authors</Link>
                <Link className="nav-link text-white" to="/add">Add Book</Link>
            </nav>

            <p></p>
            <Outlet />

        </div>
    )
}