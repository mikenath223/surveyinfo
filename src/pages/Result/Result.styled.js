import styled from 'styled-components';
import { breakpoints } from 'styles/global';
import { Row } from 'react-bootstrap';

export const ResultHeadText = styled.h2`
  font-size: ${({ theme }) => theme.textSizes.mainText};
  color: ${({ theme }) => theme.colors.subText};
  margin: 20px 0;
  border-radius: 20px;
  text-align: center;

  @media ${breakpoints.md} {
    font-size: 20px;
  }
`

export const MainBoard = styled.div`
  background-color: ${({ theme }) => theme.colors.dashboardBg};
  width: 100%;
  border-radius: 20px;
`

export const ResultSection = styled.div`
  display: ${({ theme }) => theme.display};
  justify-content: space-around;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 10px 30px;
`

export const Text = styled.h3`
  text-align: center;
  padding: 5px 0;
  color: ${({ theme }) => theme.colors.introText};
  background-color: ${({ theme }) => theme.colors.resultHead};
  border-radius: 10px;

  &.result {
    white-space: wrap;
    text-align: unset;
    padding-left: 10px;
    background-color: unset;
  }
`

export const Message = styled.p`
  font-size: ${({ theme }) => theme.textSizes.mainText};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.resultBg};
  border-radius: 10px;
  min-height: 300px;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.textSizes.mainText};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.resultBg};
  border-radius: 10px;
  max-height: 150px;
`;

export const BottomLinks = styled(Row)``