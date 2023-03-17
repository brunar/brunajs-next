import { useState } from 'react';
import styled from 'styled-components';
import { Row } from '@/components/layout/row';
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
  color: blue;
  background-color: ${(props) => (props.bg ? 'greenyellow' : 'white')};
  position: fixed;
  z-index: 99998;
`;

const HeaderWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  position: relative; // elements inside has position absolute

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
        <Row size="1600px" marginT="1rem" marginB="1rem">
          <HeaderWrap>
            <IconMenu open={menuOpen} handleToggleMenu={handleToggleMenu} />
            <SvgMainLogo height="4rem" />
            <MenuList />
          </HeaderWrap>
        </Row>
      </HeaderBg>
      <MegaMenu open={menuOpen} />
    </>
  );
};

export default Header;
