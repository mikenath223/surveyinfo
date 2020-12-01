import React from "react";
import { Formik } from "formik";
import { Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { SurveyIntro } from './Form.styled'
import * as Yup from "yup";

const schema = Yup.object({
  message: Yup.string().required(),
  date: Yup.date().required(),
  layout: Yup.string(),
  color: Yup.string(),
  text: Yup.string()
});

export default function SurveyForm({ handleSubmit }) {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(vals) => handleSubmit(vals)}
      initialValues={{
        text: "REGULAR", color: "LIGHT", layout: "LIST",
        message: '', date: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isSubmitting,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit} className="ml-lg-5 m-4">
            <SurveyIntro>Take the survey</SurveyIntro>
            <Form.Group as={Row} className="pb-4 mx-0" controlId="validationFormikMessage1">
              <Form.Label>Message</Form.Label>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  name="message"
                  className="mh-100"
                  rows="7"
                  data-testid="messageInput"
                  spellCheck="true"
                  value={values.message}
                  onBlur={handleBlur}
                  onFocus={handleBlur}
                  onChange={handleChange}
                  isValid={touched.message && !errors.message}
                  isInvalid={errors.message ? touched.message : (isSubmitting && errors.message)}
                />
                <Form.Control.Feedback data-testid="messageError" tooltip type="invalid">{errors.message}</Form.Control.Feedback>
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Row} className="pb-4 mx-0" controlId="validationFormikDate2">
              <Form.Label className="col-12 pl-0">Date</Form.Label>
              <InputGroup className="p-0 col-5">
                <Form.Control
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.date && !errors.date}
                  isInvalid={errors.date ? touched.date : (isSubmitting && errors.date)}
                />
                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid" tooltip>{errors.date}</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Row className="pb-4 px-0 mx-0 mt-4">
              <Form.Label as={Col} className="col-12 pl-0">Customize your theme</Form.Label>
              <Row className="col-12 mx-0 border border-1 mt-1 p-2">
                <Form.Group as={Col} md="4">
                  <Form.Label className="font-weight-bold">Layout</Form.Label>
                  <InputGroup>
                    <div role="group" aria-labelledby="my-radio-group">
                      <Form.Check
                        type="radio"
                        id="layout"
                        name="layout"
                        label="List"
                        onChange={handleChange}
                        defaultChecked
                        value="LIST"
                      />
                      <Form.Check
                        type="radio"
                        id="layout"
                        name="layout"
                        label="Grid"
                        value="GRID"
                        onChange={handleChange}
                      />
                    </div>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label className="font-weight-bold">Color Mode</Form.Label>
                  <InputGroup>
                    <div role="group" aria-labelledby="my-radio-group">
                      <Form.Check
                        type="radio"
                        id="color"
                        name="color"
                        label="Light Mode"
                        value="LIGHT"
                        onChange={handleChange}
                        defaultChecked
                      />
                      <Form.Check
                        type="radio"
                        id="color"
                        name="color"
                        label="Dark Mode"
                        value="DARK"
                        onChange={handleChange}
                      />
                    </div>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label className="font-weight-bold">Text Size</Form.Label>
                  <InputGroup>
                    <div role="group" aria-labelledby="my-radio-group">
                      <Form.Check
                        type="radio"
                        id="text"
                        name="text"
                        label="Regular"
                        value="REGULAR"
                        defaultChecked
                        onChange={handleChange}
                      />
                      <Form.Check
                        type="radio"
                        id="text"
                        name="text"
                        label="Large"
                        value="LARGE"
                        onChange={handleChange}
                      />
                    </div>
                  </InputGroup>
                </Form.Group>
              </Row>
            </Form.Row>
            <Row className="col-12 mx-0 my-5">
              <Button className="mx-auto" type="submit" disabled={isSubmitting}>Submit survey</Button>
            </Row>
          </Form>
        )}
    </Formik>
  );
}

SurveyForm.proptypes = {
  handleSubmit: PropTypes.func
}