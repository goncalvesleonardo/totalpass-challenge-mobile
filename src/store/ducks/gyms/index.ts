import {Reducer} from 'redux';
import {GymsState, GymsTypes} from './types';

const INITIAL_STATE: GymsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<GymsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GymsTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GymsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case GymsTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
