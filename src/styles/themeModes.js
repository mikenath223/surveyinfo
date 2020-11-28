const lightMode = {
  tealLight: '#34d1d1',
  lightCyan: 'lightCyan',
  lightTeal: '#e5f5f4',
}

const darkMode = {
  lightGrey: '#6c6c6c',
  grey: '#494949',
  tealDark: '#0c3c3d',
}

const lightGrid = {
  display: 'grid',
  colors: { ...lightMode }
}

const lightList = {
  display: 'flex',
  colors: { ...lightMode }
}

const darkGrid = {
  display: 'grid',
  colors: { ...darkMode }
}

const darkList = {
  display: 'flex',
  colors: { ...darkMode }
}

const userDefinedThemes = {
  LIGHT_GRID_LARGE_TEXT: {
    ...lightGrid,
    textSize: '18px'
  },
  LIGHT_GRID_SMALL_TEXT: {
    ...lightGrid,
    textSize: '12px'
  },
  LIGHT_LIST_LARGE_TEXT: {
    ...lightList,
    textSize: '18px'
  },
  LIGHT_LIST_SMALL_TEXT: {
    ...lightList,
    textSize: '12px'
  },
  DARK_GRID_LARGE_TEXT: {
    ...darkGrid,
    textSize: '18px'
  },
  DARK_GRID_SMALL_TEXT: {
    ...darkGrid,
    textSize: '12px'
  },
  DARK_LIST_LARGE_TEXT: {
    ...darkList,
    textSize: '18px'
  },
  DARK_LIST_SMALL_TEXT: {
    ...darkList,
    textSize: '12px'
  },
}

export default userDefinedThemes