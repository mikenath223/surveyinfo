import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Hero,
  HeroText,
  HeroSubText,
  DashBoard,
  InnerSection,
  BoardAside,
  FormSection
} from './Quiz.styled';
import { setThemeMode, setQuizMode } from 'store/actions';
import Form from 'components/Form';

const Quiz = ({setThemeMode}) => {

  return <main>
    <Hero>
      <HeroText>Survey Grill</HeroText>
      <HeroSubText>We invite you to come take our survey</HeroSubText>
    </Hero>
    <DashBoard>
      <InnerSection>
        <BoardAside>
        </BoardAside>
        <FormSection>
          <Form />
        </FormSection>
      </InnerSection>
    </DashBoard>
    <Link to="/result">Result</Link>
  </main>
}

const mapDispatchToProps = {
  saveResult,
  setThemeMode
}

export default connect(null, mapDispatchToProps)(Quiz)