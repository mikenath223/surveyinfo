import initialState from 'store/InitialStates';
import { QUIZRESULT } from 'constants/ActionTypes';

const quizResult = (state = initialState.resultReducer,
  { result, type }) => {
    
  switch (type) {
    case QUIZRESULT.SET_QUIZ_RESULT:
      return { ...state, ...result };
    default:
      return state;
  }
}

export default quizResult;