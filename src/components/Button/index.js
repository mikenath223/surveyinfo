import styled from 'styled-components';
import theme from 'styled-theming';
import buttonBackgound from 'styles/global';

const backgroundColor = theme('mode', buttonBackgound);

export const Button = styled.button`
  background-color: ${backgroundColor};
`;