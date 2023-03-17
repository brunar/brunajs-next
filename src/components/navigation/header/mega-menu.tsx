import styled, { css } from 'styled-components';
import { fontSize } from '@/constants/font';
import { Row } from '@/components/layout/row';
import { menuData } from '@/data/menu';

type WrapperProps = {
  openMenu?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  width: 100%; /*280px;*/
  max-width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: greenyellow;
  padding: 200px 0 50px;
  box-sizing: border-box;
  transition: transform 0.3s cubic-bezier(0.2, 0, 0, 1), opacity 0s ease-in-out;
  transform: translateY(-105%);
  opacity: 0;

  ${(props) =>
    props.openMenu &&
    css`
      transform: translateY(0);
      opacity: 1;
    `}
`;

const MenuNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const NavGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 50px;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: ${fontSize(18)};
  padding: 20px 0 0;
  list-style: none;
  border-top: solid 1px rgba(0, 0, 0, 0.2);
  color: black;
`;

const ItemList = styled.li`
  display: flex;
  font-size: ${fontSize(18)};
  padding: 10px 0;
`;

type MegaMenuProps = {
  open: boolean;
};

export const MegaMenu = ({ open }: MegaMenuProps) => {

  const MenuCol1 = [
    menuData.web,
    menuData.motion,
    menuData.illustration,
    menuData.photograph,
  ];

  const MenuCol2 = [
    menuData.arts,
    menuData.water,
  ];

  const MenuCol3 = [
    menuData.about,
    menuData.cv,
    menuData.certificates,
    menuData.contact,
  ];

  return (
    <Wrapper openMenu={open}>
      <MenuNav>
        <Row size="1600px" marginT="1rem" marginB="1rem">
          <NavGrid>
            <NavList>
              {MenuCol1.map((item) => (
                <ItemList key={'item-menu' + item}>{item.name}</ItemList>
              ))}
            </NavList>
            <NavList>
              {MenuCol2.map((item) => (
                <ItemList key={'item-menu' + item}>{item.name}</ItemList>
              ))}
            </NavList>
            <NavList>
              {MenuCol3.map((item) => (
                <ItemList key={'item-menu' + item}>{item.name}</ItemList>
              ))}
            </NavList>
          </NavGrid>
        </Row>
      </MenuNav>
    </Wrapper>
  );
};
