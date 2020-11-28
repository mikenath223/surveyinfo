import { combineReducers, createStore } from 'redux';
import { themeMode, quizResult } from './reducers';

const rootReducer = combineReducers({
  themeMode,
  quizResult
})

export default createStore(rootReducer)