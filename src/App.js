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
        <ThemeProvider theme={globalTheme}>
          <Route exact path="/">
            <Quiz />
          </Route>
          <ThemeProvider theme={userDefinedThemes[themeMode]}>
            <Route exact path="/result">
              <Result />
            </Route>
          </ThemeProvider>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  themeMode: state.themeMode
})

export default connect(mapStateToProps, null)(App);
