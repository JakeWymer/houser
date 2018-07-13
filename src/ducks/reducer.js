const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  image: '',
  mortgage: 0,
  rent: 0
}

const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE';
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO';
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';
const CLEAR_STATE = 'CLEAR_STATE';

export function updateStepOne(name, address, city, state, zipcode) {
  return {
    type: UPDATE_STEP_ONE,
    payload: {name, address, city, state, zipcode}
  }
}

export function updateStepTwo(image) {
  return {
    type: UPDATE_STEP_TWO,
    payload: image
  }
}

export function updateStepThree(mortgage, rent) {
  return {
    type: UPDATE_STEP_THREE,
    payload: {mortgage, rent}
  }
}

export function clearState() {
  return {
    type: CLEAR_STATE,
    payload: initialState
  }
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_STEP_ONE:
      return {
        ...state,
        name: action.payload.name,
        address: action.payload.address,
        city: action.payload.city,
        state: action.payload.state,
        zipcode: action.payload.zipcode
      }
    case UPDATE_STEP_TWO:
      return {
        ...state,
        image: action.payload
      }
    case UPDATE_STEP_THREE:
      return {
        ...state,
        mortgage: action.payload.mortgage,
        rent: action.payload.rent
      }
    case CLEAR_STATE:
      return {
        ...action.payload
      }
    default:
      return state;
  }
}