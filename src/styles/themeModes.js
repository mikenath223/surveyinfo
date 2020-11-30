const lightMode = {
  mainText: '#fff',
  subText: '#000',
  introText: '#000',
  headBg: '#826eef',
  bottomDropBg: '#EBEBED',
  dashboardBg: '#fff',
  asideBg: 'silver',
  darkGrey: '#EBEBED',
  lightGrey: '#999CE0',
  resultHead: '#E6E6E6',
  resultBg: '#C5C5C5'
}

const darkMode = {
  mainText: '#fff',
  subText: '#E5E5E5',
  introText: '#fff',
  headBg: '#140017',
  bottomDropBg: '#000',
  dashboardBg: '#000',
  asideBg: '#1A1A1A',
  darkGrey: '#EBEBED',
  lightGrey: '#999CE0',
  resultHead: '#1A1A1A',
  resultBg: '#121212'  
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

const largeText = {
  textSizes: {
    mainText: '40px',
    subText: '22px',
    introText: '20px'
  }
}

const regularText = {
  textSizes: {
    mainText: '18px',
    subText: '16px',
    introText: '14px'
  }
}

const userDefinedThemes = {
  LIGHT_GRID_LARGE_TEXT: {
    ...lightGrid,
    ...largeText
  },
  LIGHT_GRID_REGULAR_TEXT: {
    ...lightGrid,
    ...regularText
  },
  LIGHT_LIST_LARGE_TEXT: {
    ...lightList,
    ...largeText
  },
  LIGHT_LIST_REGULAR_TEXT: {
    ...lightList,
    ...regularText
  },
  DARK_GRID_LARGE_TEXT: {
    ...darkGrid,
    ...largeText
  },
  DARK_GRID_REGULAR_TEXT: {
    ...darkGrid,
    ...regularText
  },
  DARK_LIST_LARGE_TEXT: {
    ...darkList,
    ...largeText
  },
  DARK_LIST_REGULAR_TEXT: {
    ...darkList,
    ...regularText
  },
}

export default userDefinedThemes