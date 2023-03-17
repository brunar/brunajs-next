import { css } from 'styled-components';
import { down, breakpoints } from '@/constants/media-queries';

export const GlobalWrapper = css`
  width: calc(100% - 100px);

  @media ${down(breakpoints.tab_lg)} {
    width: calc(100% - 60px);
  }

  @media ${down(breakpoints.mob)} {
    width: calc(100% - 40px);
  }
`;
