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
