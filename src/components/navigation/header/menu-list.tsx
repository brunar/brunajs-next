import styled from 'styled-components';
import { fontSize } from '@/constants/font';

const ListWrap = styled.ul`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: row;
  font-size: ${fontSize(15)};
  padding: 10px;
  background:#ccc;
`;

export const MenuList = () => {
  return (
    <ListWrap>
      {[1, 2, 3, 4].map((item) => (
        <ItemList key={'item-menu' + item}>
          {'Menu' + item}
        </ItemList>
      ))}
    </ListWrap>
  );
};
