import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

interface Book {
    id: number;
    book_name: string;
    title: string;
    description: string;
    category: string;
    mrp: string;
    isbn: string;
    front_cover?: string;
    back_cover?: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/books/", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setBooks(response.data);
                setLoading(false);
            } catch (err: any) {
                console.error(err);
                setError("Failed to fetch books.");
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <p>Loading books...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">My Books</h2>
            {books.length === 0 && <p>No books found. <Link to="/create-book" className="text-blue-600">Create one</Link></p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="border rounded p-4 shadow">
                        {book.front_cover && (
                            <img src={`http://127.0.0.1:8000${book.front_cover}`} alt={book.book_name} className="w-full h-48 object-cover mb-2" />
                        )}
                        <h3 className="text-xl font-semibold">{book.book_name}</h3>
                        <p className="text-gray-600">{book.description}</p>
                        <p className="text-sm text-gray-500">Category: {book.category}</p>
                        <p className="text-sm text-gray-500">MRP: {book.mrp}</p>
                        <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
                        <Link
                            to={`/edit-book/${book.id}`}
                            className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
