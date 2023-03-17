import styled, { css } from 'styled-components';
import { fontSize } from '@/constants/font';

const Wrapper = styled.button`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize(11)};
  text-transform: uppercase;
  position: absolute;
  left: 0;
`;

type IconWrapProps = {
  openMenu?: boolean;
};

const IconWrap = styled.div<IconWrapProps>`
  margin: 0;
  width: 30px;
  box-sizing: border-box;
  cursor: pointer;

  &:before,
  &:after,
  & > div {
    background-color: black;
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
  }
  ${(props) =>
    props.openMenu &&
    css`
      &:before {
        transform: translateY(8px) rotate(135deg);
      }
      &:after {
        transform: translateY(-8px) rotate(-135deg);
      }
      div {
        transform: scale(0);
      }
    `}
`;

type IconMenuProps = {
  open: boolean;
  handleToggleMenu: (...args: any[]) => any;
};

export const IconMenu = ({ open, handleToggleMenu }: IconMenuProps) => {
  const isExpanded = !!open;

  return (
    <Wrapper
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      onClick={handleToggleMenu}
      type="button"
    >
      <IconWrap openMenu={isExpanded}>
        <div />
      </IconWrap>
      {isExpanded ? ' Close' : 'Menu'}
    </Wrapper>
  );
};
