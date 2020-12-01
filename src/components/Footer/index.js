import React from 'react';
import { Col } from 'react-bootstrap';
import { FooterBar, CopyrightText, Divider } from './Footer.styled';

const Footer = () => <FooterBar>
  <Col sm={12}>
    <Divider />
  </Col>
  <Col sm={12}>
    <CopyrightText>© 2020 CheabanTest. All rights reserved.</CopyrightText>
  </Col>
</FooterBar>;

export default Footer;