import React from 'react';
import 'jest-styled-components';
import { withProviders } from 'utils/testUtils';
import Result from './index';

describe('Result page', function () {
  let defaultTheme = 'LIGHT_GRID_LARGE_TEXT';
  let quizResult = { message: 'yes', date: '12/12/20' }

  it('should match snapshot', () => {
    const { container } = withProviders(<Result quizResult={quizResult} />, defaultTheme);

    expect(container).toMatchSnapshot();
  });

  it('should show correct themeMode', () => {
    const { container } = withProviders(<Result quizResult={quizResult} />, 'DARK_GRID_LARGE_TEXT');


  })
});
