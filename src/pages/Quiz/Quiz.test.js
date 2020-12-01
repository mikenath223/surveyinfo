import React from 'react';
import 'jest-styled-components';
import { withReduxThemeProvider } from 'utils/testUtils';
import Quiz from './index';

describe('Quiz page', function () {
  it('should match snapshot', () => {
    const { container } = withReduxThemeProvider(<Quiz />);

    expect(container).toMatchSnapshot();
  });
});
