import { db } from "./firebase";

export const getAllQuestions = () => db.ref("items");
export const delAllQuestions = itemId => db.ref(`/items/${itemId}`).remove();
export const updAllQuestions = (itemId, item) =>
  db.ref(`/items/${itemId}`).update(item);
export const appendRequestsToAllQuestions = (itemId, item, key) =>
  db
    .ref(`/items/${itemId}`)
    .child("requests")
    .push(item);
export const removeQuestionRequest = (itemId, questionId) =>
  db
    .ref(`/items/${itemId}`)
    .child(`requests/${questionId}`)
    .remove();

export const getUserQuestions = userId => db.ref(`users/${userId}`);
export const delUserQuestions = (itemId, userId) =>
  db.ref(`/users/${userId}/${itemId}`).remove();
export const updUserQuestions = (itemId, userId, item) =>
  db.ref(`/users/${userId}/${itemId}`).update(item);
export const requestUserQuestions = (itemId, userId, item, key) =>
  db
    .ref(`/users/${userId}/${itemId}`)
    .child("requests")
    .push(item);
export const removeUserQuestionRequest = (userId, itemId, userQuestionId) =>
  db
    .ref(`/users/${userId}/${itemId}`)
    .child(`requests/${userQuestionId}`)
    .remove();
