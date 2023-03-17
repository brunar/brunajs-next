import { useState } from 'react';
import styled from 'styled-components';
import { down, breakpoints } from '@/constants/media-queries';
import { GlobalWrapper } from '@/components/layout/row/global-wrapper';
import { SvgMainLogo } from '@/svg/main-logo';
import { IconMenu } from './icon-menu';
import { MenuList } from './menu-list';
import { MegaMenu } from './mega-menu';

type HeaderBgProps = {
  bg?: boolean;
};

const HeaderBg = styled.header<HeaderBgProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  color: blue;
  background-color: ${(props) => (props.bg ? 'greenyellow' : 'white')};
  box-shadow: ${(props) => (props.bg ? 'none' : '0 2px 0 rgb(0 0 0 / 10%)')};
  position: fixed;
  z-index: 99998;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative; // elements inside has position absolute
  ${GlobalWrapper};
  max-width: 1600px;
  height: 100px;

  @media ${down(breakpoints.mob)} {
    height: 60px;
  }

  p {
    font-size: 12px;
    margin-top: 3px;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((menuOpen) => !menuOpen);

  return (
    <>
      <HeaderBg bg={menuOpen}>
        <HeaderWrap>
          <IconMenu open={menuOpen} handleToggleMenu={handleToggleMenu} />
          <SvgMainLogo height="60%" />
          <MenuList />
        </HeaderWrap>
      </HeaderBg>
      <MegaMenu open={menuOpen} />
    </>
  );
};

export default Header;
