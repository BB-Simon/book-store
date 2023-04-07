import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'cDqAmr7DM2G0XmytglqH';
const baseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const initialState = {
  books: [],
  booksLoading: false,
  addBookLoading: false,
  removeBookLoading: false,
  booksError: null,
  addBookError: null,
  removeBookError: null,
};

const normalize = (data) => {
  let books = [];
  if (data instanceof Object) {
    books = Object.keys(data).map((key) => ({
      item_id: key,
      ...data[key][0],
    }));
  }

  return books;
};

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const data = await axios(baseUrl);
    const books = normalize(data.data);
    return books;
  } catch (error) {
    return error;
  }
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const newBook = { ...book, category: 'Test' };
    await axios.post(baseUrl, newBook);
    return newBook;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  } catch (error) {
    return error;
  }
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    // Fetch Books
    builder.addCase(getBooks.pending, (state) => ({ ...state, booksLoading: true }));
    builder.addCase(getBooks.fulfilled, (state, action) => ({
      ...state,
      booksLoading: false,
      books: [...action.payload],
    }));
    builder.addCase(getBooks.rejected, (state, action) => ({
      booksLoading: false,
      booksError: action.payload,
    }));

    // Add Book
    builder.addCase(addBook.pending, (state) => ({ ...state, addBookLoading: true }));
    builder.addCase(addBook.fulfilled, (state, action) => ({
      ...state,
      addBookLoading: false,
      books: [action.payload, ...state.books],
    }));
    builder.addCase(addBook.rejected, (state, action) => ({
      ...state,
      addBookLoading: false,
      addBookError: action.error,
    }));

    // Remove Book
    builder.addCase(removeBook.pending, (state) => ({ ...state, removeBookLoading: true }));
    builder.addCase(removeBook.fulfilled, (state, action) => ({
      ...state,
      removeBookLoading: false,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }));
    builder.addCase(removeBook.rejected, (state, action) => ({
      ...state,
      removeBookLoading: false,
      removeBookError: action.error,
    }));
  },
});

export default bookSlice.reducer;
