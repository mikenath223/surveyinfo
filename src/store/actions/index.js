import { THEME, QUIZRESULT } from 'constants/ActionTypes';

export const setThemeMode = (themeMode) => ({
  type: THEME.SET_THEME_MODE,
    themeMode
})

export const setQuizResult = (result) => ({
  type: QUIZRESULT.SET_QUIZ_RESULT,
    result
})