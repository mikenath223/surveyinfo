import styled from 'styled-components';

export const SurveyIntro = styled.h2`
  font-size: ${({theme}) => theme.fontWeights.large};
  font-weight: ${({theme}) => theme.fontWeights.semiBold};
  text-align: center;
  line-height: 2.5;
  margin-bottom: 50px
`