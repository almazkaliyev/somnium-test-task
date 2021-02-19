import axios from './axios';

export const fetchBooks = async () => {
  try {
    const { data } = await axios.get('/books');
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchCartBooks = async () => {
  try {
    const { data } = await axios.get('/cart');
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchAddBookToCart = async (book) => {
  try {
    const resBooks = await axios.get('/cart');
    const index = resBooks.data.findIndex((item) => item.title === book.title);
    if (index === -1) {
      const { data } = await axios.post('/cart', book);
      return data;
    }
    return null;
  } catch (e) {
    throw new Error(e);
  }
};

export const fetchRemoveBookFromCart = async (book) => {
  try {
    const { data } = await axios.delete(`/cart/${book.id}`);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};
