import styled from 'styled-components';
import { breakpoints } from 'styles/global';

export const Hero = styled.section`
  background: url(/assets/survey.png) center no-repeat;
  background-color: ${({ theme }) => theme.colors.purpleDark};
  background-position: 90%;
  background-size: 300px;
  padding: 30px 0 0 100px;
  min-height: 300px;

  @media ${breakpoints.sm} {
    background-size: 150px;
    padding: 30px 0 0 30px;
  }
`

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.textSizes.xlarge};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-top: 4.5rem;
  text-transform: uppercase;
  margin: 0;

  @media ${breakpoints.sm} {
    font-size: 20px;
    padding-top: 7.5rem;
  }
`

export const HeroSubText = styled.h4`
  font-size: ${({ theme }) => theme.textSizes.medium};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-style: italic;

  @media ${breakpoints.sm} {
    font-size: 14px;
  }
`
export const DashBoard = styled.section`
  margin: -90px auto 0 auto;
  min-height: 500px;
  max-width: 1200px;
  padding: 20px;
`
export const InnerSection = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  max-width: 1200px;
  min-height: 500px;
  border-radius: 20px;
`

export const BoardAside = styled.div`
  background: url(/assets/mailbox.png) center no-repeat;
  background-color: silver;
  background-size: 190px;
  width: 350px;
  min-height: 500px;
  border-radius: 20px 0;

  @media ${breakpoints.md} {
    display: none
  }
`

export const FormSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%
`