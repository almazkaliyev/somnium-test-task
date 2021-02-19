/* eslint-disable import/prefer-default-export */
import axios from './axios';

export const fetchBooks = async () => {
  try {
    const res = await axios.get('/books');
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};
