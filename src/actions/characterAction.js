export const GET_CHARACTERS = 'GET_CHARACTERS'

export function getCharacters(payload) {
  return dispatch => {
    return fetch("https://anapioficeandfire.com/api/characters")
    .then(res => res.json())
    .then(characters => {
      dispatch({
        type: GET_CHARACTERS,
        payload: characters
      })
    })
    .catch(console.error)
  }
}
