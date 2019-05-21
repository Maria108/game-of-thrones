export const LOAD_HOUSES = 'LOAD_HOUSES'
export const GET_HOUSE = 'GET_HOUSE'

export function loadHouses(payload) {
  return dispatch => {
    return fetch("https://anapioficeandfire.com/api/houses")
    .then(res => res.json())
    .then(houses => {
      dispatch({
        type: LOAD_HOUSES,
        payload: houses
      })
    })
    .catch(console.error)
  }
}

export const getHouse = chosenHouse => {
  return {
    type: GET_HOUSE,
    payload: chosenHouse
  }
}
