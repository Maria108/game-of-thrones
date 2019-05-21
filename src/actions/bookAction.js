export const LOAD_BOOKS = 'LOAD_BOOKS'

export function loadBooks(payload) {
  return dispatch => {
    return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(books => {
      dispatch({
        type: LOAD_BOOKS,
        payload: books
      })
    })
    .catch(console.error)
  }
}
