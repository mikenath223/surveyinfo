import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const FooterBar = styled(Row)`
  width: 80%;
  margin: auto;
`;

export const CopyrightText = styled.div`
  text-align: center;
  margin: 1.5rem 0;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.introText};
`;

export const Divider = styled.hr`
  border-top: 1px solid grey;
  margin-top: 4rem;
  margin-bottom: 0;
  opacity: 0.3;
`;
