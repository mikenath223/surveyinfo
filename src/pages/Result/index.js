import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Hero, HeroText, HeroSubText, DashBoard,
  InnerSection, BoardAside
} from 'pages/Quiz/Quiz.styled';
import {
  ResultHeadText, MainBoard, Text,
  ResultSection, Message, Date, BottomLinks
} from './Result.styled';
import ButtonLink from 'components/Button';
import { Col } from 'react-bootstrap';

const Result = ({ quizResult: { message, date } }) => {
  const history = useHistory();

  useEffect(() => {
    if (!Object.keys(quizResult).length) history.push('/')
  }, [])

  return <main>
    <Hero>
      <HeroText>Survey Grill</HeroText>
      <HeroSubText>We invite you to come take our survey</HeroSubText>
    </Hero>
    <DashBoard>
      <InnerSection>
        <BoardAside />
        <MainBoard>
          <ResultHeadText>Your Result</ResultHeadText>
          <ResultSection>
            <Message>
              <Text>Message</Text>
              <Text as="p" className="result">
                {message}
              </Text>
            </Message>
            <Date>
              <Text>Date</Text>
              <Text as="p" className="result">
                {date}
              </Text>
            </Date>
          </ResultSection>
          <BottomLinks className="mx-2 my-5">
            <Col md={6} className="text-center my-3">
              <ButtonLink as={Link} className="bg-primary p-2 rounded text-white link" to="/">
                Retake Survey
              </ButtonLink>
            </Col>
            <Col md={6} className="text-center my-2">
              <ButtonLink as="a" className="source bg-warning  p-2 rounded text-success font-weight-bold" rel="noopener noreferrer" target="_blank" href="https://github.com/mikenath223/surveyinfo">
                  Source Code
              </ButtonLink>
            </Col>
          </BottomLinks>
        </MainBoard>
      </InnerSection>
    </DashBoard>
  </main>
}

const mapStateToProps = ({ quizResult }) => ({
  quizResult,
})

Result.propTypes = {
  quizResult: PropTypes.shape({
    message: PropTypes.string,
    date: PropTypes.string
  })
}

export default connect(mapStateToProps, null)(Result)