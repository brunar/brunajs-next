import styled from 'styled-components';
import { down, breakpoints } from '@/constants/media-queries';
import { GlobalWrapper } from '@/components/layout/row/global-wrapper';
import { SvgMainLogo } from '@/svg/main-logo';

const FooterBg = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${GlobalWrapper};
  max-width: 1600px;
  padding: 10px;
  border-top: 1px solid #e4e4e4;
  color: #444;

  @media ${down(breakpoints.mob)} {
    flex-flow: column nowrap;
    justify-content: center;
  }

  p {
    font-size: 12px;
  }
`;

const Footer = () => {
  const today = new Date();

  return (
    <FooterBg>
      <FooterBottom>
        <SvgMainLogo height="2rem" />
        <p>COPYRIGHT © {today.getFullYear()} Bruna JS RGB Creative</p>
      </FooterBottom>
    </FooterBg>
  );
};

export default Footer;
