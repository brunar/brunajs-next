import styled, { css } from 'styled-components';
import { GlobalWrapper } from './global-wrapper';

export interface SectionProps {
  colorText?: string | ((...args: any[]) => any);
  bgColor?: string | ((...args: any[]) => any);
}

export const Section = styled.section<SectionProps>`
  color: ${(props) => props.colorText};
  background: ${(props) => props.bgColor};
  width: 100%;
  display: flex;
  justify-content: center;
`;

export interface WrapperProps {
  size?: string;
  flex?: string;
  nowrap?: boolean;
  marginT?: string;
  marginB?: string;
  center?: boolean;
  vcenter?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-flow: ${flex};
    `}

  ${({ size }) =>
    size &&
    css`
      ${GlobalWrapper};
      max-width: ${[size]};
    `}

  ${({ marginT }) =>
    marginT &&
    css`
      margin-top: ${[marginT]};
    `}

  ${({ marginB }) =>
    marginB &&
    css`
      margin-bottom: ${[marginB]};
    `}

    ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ vcenter }) =>
    vcenter &&
    css`
      align-items: center;
    `}
`;
