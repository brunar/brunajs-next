import styled from 'styled-components';
import { Row } from '@/components/layout/row';

const FooterBg = styled.footer`
  width: 100%;
  display: flex;
  color: pink;
  background-color: grey;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: red;

  p {
    font-size: 12px;
    margin-top: 3px;
  }
`;

const Footer = () => {
  const today = new Date();

  return (
    <FooterBg>
      <Row size="1600px" marginT="2rem">
        <FooterBottom>
          <p>COPYRIGHT © {today.getFullYear()} Bruna JS RGB Creative</p>
        </FooterBottom>
      </Row>
    </FooterBg>
  );
};

export default Footer;
