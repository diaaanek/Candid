// /*
//  * action types
//  */


const fetchingCategories = () => {
  return (dispatch) => {
    fetch ("http://localhost:3000/api/categories")
    .then( res => res.json())
    .then(categories => dispatch({type: "FETCHED_CATEGORIES", categories }))
  }
}


const fetchingDecks = () => {
  return (dispatch) => {
    fetch ("http://localhost:3000/api/decks")
    .then ( res => res.json())
    .then(decks => dispatch(fetchedDecks(fetchedDecks)))
  }
}


export const fetchDecks = () => (
  fetch ('/api/decks')
  method: "GET",
  data: {id: id}
})

)


// 
// fetch('/api/v1/people.json', {
//   method: 'post',
//   body: JSON.stringify({first_name: "Ricky", last_name: "Bobby"}),
//   headers: {
//     'Content-Type': 'application/json',
//     'X-CSRF-Token': Rails.csrfToken()
//   },
//   credentials: 'same-origin'
// }).then(function(response) {
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// });
// export const SET_FILTER = 'SET_FILTER';
//
// export const NEXT_QUESTION = 'NEXT_QUESTION';
// export const PREV_QUESTION = 'PREV_QUESTION';
// export const FLIP_CARD = 'FLIP_CARD';
//
// export const LOAD_QUIZ = 'LOAD_QUIZ';
// export const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS';
// export const LOAD_QUIZ_ERROR = 'LOAD_QUIZ_ERROR';
//
// export const SET_VERBSET = 'SET_VERBSET';
//
// export const SUBMIT_ANSWER = 'SUBMIT_ANSWER';
//
// export const TOGGLE_FOCUS = 'TOGGLE_FOCUS';
//
// /*
//  * action creators
//  */
// export function setFilter(filter, status) {
// 	return { type: SET_FILTER, filter, status };
// }
//
// export function nextQuestion() {
// 	return { type: NEXT_QUESTION };
// }
//
// export function prevQuestion() {
// 	return { type: PREV_QUESTION };
// }
//
// export function flipCard() {
// 	return { type: FLIP_CARD };
// }
//
// export function submitAnswer(userAnswer, ignoreAccents) {
// 	return { type: SUBMIT_ANSWER, userAnswer, ignoreAccents };
// }
//
// export function loadQuizError(error) {
// 	return { error, type: LOAD_QUIZ_ERROR };
// }
//
// export function loadQuizSuccess(quiz) {
// 	return (dispatch) => {
// 		dispatch({ type: LOAD_QUIZ_SUCCESS, quiz });
// 	};
// }
//
// export function loadQuizRequest() {
// 	return { type: LOAD_QUIZ };
// }
//
// export function setVerbSet(verbSet) {
// 	return { type: SET_VERBSET, verbSet };
// }
//
// export function loadQuiz(verbSet = 'topHundred') {
// 	const url = 'api/quiz?verbs=' + verbSet;
// 	return (dispatch) => {
// 		fetch(url, {
// 			accept: 'application/json',
// 		})
// 		.then(response => response.json())
// 		.then(json => dispatch(loadQuizSuccess(json)))
// 		.catch((error) => { console.log('request failed', error); });
// 	};
// }
//
// export function toggleFocus() {
// 	return { type: TOGGLE_FOCUS };
// }
