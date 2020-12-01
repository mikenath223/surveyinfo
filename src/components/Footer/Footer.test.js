import React from 'react';
import 'jest-styled-components';
import Footer from './index';

describe('Footer', () => {
  const { container } = withThemeProvider(<Footer />);
  
  it('should match snapshot', () => {
    expect(container).toMatchSnapshot();
  });
})
