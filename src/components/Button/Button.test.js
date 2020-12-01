import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import Button from './index';

const onClickMock = jest.fn();

describe('Button', () => {
  let wrapper, getText;
  beforeEach(() => {
    const { container, getByText } = render(
      <Button onClick={onClickMock}>Testing</Button>
    );

    wrapper = container;
    getText = getByText;
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to click button component', () => {
    fireEvent.click(getText(/Testing/));

    expect(onClickMock).toBeCalled();
  });
});
