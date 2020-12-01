import styled from 'styled-components';
import { breakpoints } from 'styles/global';
import { Row } from 'react-bootstrap';

export const ResultHeadText = styled.h2`
  font-size: ${({ theme }) => theme.textSizes.introText};
  color: ${({ theme }) => theme.colors.subText};
  margin: 50px 0;
  border-radius: 20px;
  text-align: center;

  @media ${breakpoints.md} {
    font-size: 14px;
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
  grid-template-columns: 48% 48%;
  gap: 30px;
  margin: 10px 30px;

  @media ${breakpoints.sm} {
    display: flex;
  }
`

export const Text = styled.h3`
  font-size: ${({ theme }) => theme.textSizes.introText};
  color: ${({ theme }) => theme.colors.introText};
  background-color: ${({ theme }) => theme.colors.resultHead};
  text-align: center;
  border-radius: 10px;
  padding: 5px 0;
  overflow: hidden;

  &.result {
    text-align: unset;
    padding: 10px;
    background-color: unset;
  }

  @media ${breakpoints.sm} {
    font-size: 14px;
  }
`

export const Message = styled.div`
  font-size: ${({ theme }) => theme.textSizes.introText};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.resultBg};
  border-radius: 10px;
  min-height: 300px;

  @media ${breakpoints.md} {
    font-size: 14px;
  }
`;

export const Date = styled.div`
  font-size: ${({ theme }) => theme.textSizes.introText};
  color: ${({ theme }) => theme.colors.mainText};
  background-color: ${({ theme }) => theme.colors.resultBg};
  border-radius: 10px;
  max-height: 150px;
  
  @media ${breakpoints.md} {
    font-size: 14px;
  }
`;

export const BottomLinks = styled(Row)``