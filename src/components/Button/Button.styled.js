import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const BaseButton = styled(Button)`
  &.source {
    text-decoration: none;
    color: green;
  }
  &.link {
    text-decoration: none;
  }
`