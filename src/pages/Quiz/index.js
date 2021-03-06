import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withTheme } from 'styled-components';
import {
  Hero,
  HeroText,
  HeroSubText,
  DashBoard,
  InnerSection,
  BoardAside,
  FormSection,
  Wrapper,
} from './Quiz.styled';
import { setThemeMode, saveQuizResult } from 'store/actions';
import Form from 'components/Form';
import Footer from 'components/Footer';

const Quiz = ({ setThemeMode, saveQuizResult }) => {
  const history = useHistory();

  const handleSubmit = values => {
    const { message, date, layout, color, text } = values;
    saveQuizResult({ message, date });
    const theme = `${color}_${layout}_${text}_TEXT`;
    setThemeMode(theme);
    history.push('/result');
  }

  return <Wrapper>
    <Hero>
      <HeroText>Survey Grill</HeroText>
      <HeroSubText>We invite you to come take our survey</HeroSubText>
    </Hero>
    <DashBoard>
      <InnerSection>
        <BoardAside />
        <FormSection>
          <Form handleSubmit={handleSubmit} />
        </FormSection>
      </InnerSection>
    </DashBoard>
    <Footer />
  </Wrapper>
}

const mapDispatchToProps = {
  saveQuizResult,
  setThemeMode
}

export default withTheme(connect(null, mapDispatchToProps)(Quiz))