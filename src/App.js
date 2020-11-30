import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { Quiz, Result } from 'pages';
import { globalTheme } from './styles/global';
import userDefinedThemes from './styles/themeModes';

const App = ({ themeMode }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <ThemeProvider theme={globalTheme}>
            <Quiz />
          </ThemeProvider>
        </Route>
        <Route exact path="/result">
          <ThemeProvider theme={userDefinedThemes[themeMode]}>
            <Result />
          </ThemeProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
})

export default connect(mapStateToProps, null)(App);
