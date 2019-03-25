import { db } from "./firebase";

export const getAllBooks = () => db.ref("items");
export const delAllBooks = itemId => db.ref(`/items/${itemId}`).remove();
export const updAllBooks = (itemId, item) =>
  db.ref(`/items/${itemId}`).update(item);
export const appendRequestsToAllBooks = (itemId, item, key) =>
  db
    .ref(`/items/${itemId}`)
    .child("requests")
    .push(item);
export const removeBookRequest = (itemId, bookId) =>
  db
    .ref(`/items/${itemId}`)
    .child(`requests/${bookId}`)
    .remove();

export const getUserBooks = userId => db.ref(`users/${userId}`);
export const delUserBooks = (itemId, userId) =>
  db.ref(`/users/${userId}/${itemId}`).remove();
export const updUserBooks = (itemId, userId, item) =>
  db.ref(`/users/${userId}/${itemId}`).update(item);
export const requestUserBooks = (itemId, userId, item, key) =>
  db
    .ref(`/users/${userId}/${itemId}`)
    .child("requests")
    .push(item);
export const removeUserBookRequest = (userId, itemId, userBookId) =>
  db
    .ref(`/users/${userId}/${itemId}`)
    .child(`requests/${userBookId}`)
    .remove();
