import React from 'react';
import { withReduxProvider } from 'utils/testUtils';
import 'jest-styled-components';
import App from './App';

describe('App', function () {
  it('should match snapshot', () => {
    const { container } = withReduxProvider(<App />);

    expect(container).toMatchSnapshot();
  });
});
