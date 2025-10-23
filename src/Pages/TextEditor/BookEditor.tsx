import React, { useState, useEffect } from "react";
import axios from "axios";

// Define TypeScript interface for a Book
interface Book {
    id?: number;
    book_name: string;
    manuscript?: File | null;
    front_cover?: File | null;
    back_cover?: File | null;
    title: string;
    description: string;
    category: string;
    mrp: string;
    isbn: string;
}

interface Props {
    bookId?: number; // If editing an existing book
}

const BookEditor: React.FC<Props> = ({ bookId }) => {
    const [book, setBook] = useState<Book>({
        book_name: "",
        manuscript: null,
        front_cover: null,
        back_cover: null,
        title: "",
        description: "",
        category: "",
        mrp: "",
        isbn: "",
    });

    const [message, setMessage] = useState<string>("");

    const API_URL = bookId
        ? `http://127.0.0.1:8000/api/books/${bookId}/`
        : "http://127.0.0.1:8000/api/books/";

    const token = localStorage.getItem("access_token");

    // If editing, fetch existing book data
    useEffect(() => {
        if (bookId) {
            axios
                .get(API_URL, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((res) => {
                    setBook({ ...res.data, manuscript: null, front_cover: null, back_cover: null });
                })
                .catch((err) => console.error(err));
        }
    }, [bookId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as any;
        if (files) {
            setBook({ ...book, [name]: files[0] });
        } else {
            setBook({ ...book, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in book) {
            if (book[key as keyof Book] !== null) {
                formData.append(key, book[key as keyof Book] as any);
            }
        }

        try {
            const response = bookId
                ? await axios.put(API_URL, formData, {
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
                })
                : await axios.post(API_URL, formData, {
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
                });

            console.log("Book saved:", response.data);
            setMessage("Book saved successfully!");
        } catch (error: any) {
            console.error("Error saving book:", error.response || error.message);
            setMessage("Failed to save book.");
        }
    };

    return (
        <>
        <div className="p-40">

        <div className="max-w-3xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">{bookId ? "Edit Book" : "Create Book"}</h2>
            {message && <p className="mb-4">{message}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="book_name"
                    placeholder="Book Name"
                    value={book.book_name}
                    onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={book.title}
                    onChange={handleChange}
                                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={book.description}
                    onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    />
                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={book.category}
                    onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                />
                <input
                    type="number"
                    name="mrp"
                    placeholder="MRP"
                    value={book.mrp}
                    onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    />
                <input
                    type="text"
                    name="isbn"
                    placeholder="ISBN"
                    value={book.isbn}
                    onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    />
                <div>
                    <label>Manuscript (PDF/DOCX):</label>
                    <input 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                     type="file" name="manuscript" accept=".pdf,.doc,.docx" onChange={handleChange} />
                </div>
                <div>
                    <label>Front Cover:</label>
                    <input 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    type="file" name="front_cover" accept="image/*" onChange={handleChange} />
                </div>
                <div>
                    <label>Back Cover:</label>
                    <input 
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    type="file" name="back_cover" accept="image/*" onChange={handleChange} />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    {bookId ? "Update Book" : "Create Book"}
                </button>
            </form>
        </div>
                    </div>
                    </>
    );
};

export default BookEditor;
