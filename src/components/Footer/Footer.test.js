import React from 'react';
import 'jest-styled-components';
import Footer from './index';
import { withThemeProvider } from 'utils/testUtils';

describe('Footer', () => {
  const { container } = withThemeProvider(<Footer />);
  
  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
})
