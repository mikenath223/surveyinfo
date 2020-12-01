import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const Wrapper = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bottomDropBg};
`

export const Hero = styled.section`
  background: url(/assets/survey.png) center no-repeat;
  background-color: ${({ theme }) => theme.colors.headBg};
  background-position: 90%;
  background-size: 300px;
  padding: 30px 0 0 100px;
  min-height: 300px;

  @media ${breakpoints.sm} {
    background-size: 150px;
    padding: 30px 0 0 30px;
  }
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.textSizes.mainText};
  color: ${({ theme }) => theme.colors.mainText};
  font-family: Montserrat;
  font-weight: 700;
  padding-top: 4.5rem;
  text-transform: uppercase;
  margin: 0;

  @media ${breakpoints.md} {
    font-size: 20px;
    padding-top: 7.5rem;
  }
`;

export const HeroSubText = styled.h4`
  font-size: ${({ theme }) => theme.textSizes.subText};
  color: ${({ theme }) => theme.colors.subText};
  font-style: italic;

  @media ${breakpoints.sm} {
    font-size: 14px;
  }
`;

export const DashBoard = styled.section`
  margin: -90px auto 100px auto;
  min-height: 500px;
  max-width: 1200px;
  padding: 20px;
`;

export const InnerSection = styled.div`
  background-color: ${({ theme }) => theme.colors.dashboardBg};
  display: flex;
  max-width: 1200px;
  min-height: 500px;
  border-radius: 20px;
`;

export const BoardAside = styled.div`
  background: url(/assets/mailbox.png) center no-repeat;
  background-color: ${({ theme }) => theme.colors.asideBg};
  background-size: 190px;
  width: 500px;
  min-height: 500px;
  border-radius: 20px 0;

  @media ${breakpoints.md} {
    display: none;
  }
`;

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`;