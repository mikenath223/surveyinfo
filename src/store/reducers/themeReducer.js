import initialState from 'store/InitialStates';
import { THEME } from 'constants/ActionTypes';

const themeMode = (state = initialState.themeReducer, { themeMode, type }) => {
  switch (type) {
    case THEME.SET_THEME_MODE:
      return themeMode;
    default:
      return state;
  }
}

export default themeMode;