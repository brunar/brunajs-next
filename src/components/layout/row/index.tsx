import { Section, Wrapper } from './row-style';

export type RowProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  color?: string | ((...args: any[]) => any);
  bgColor?: string | ((...args: any[]) => any);
  size?: string;
  flex?: string;
  nowrap?: boolean;
  marginT?: string;
  marginB?: string;
  center?: boolean;
  vcenter?: boolean;
};

export const Row = ({
  bgColor,
  color,
  size,
  flex,
  nowrap,
  marginT,
  marginB = 'md',
  center,
  vcenter,
  className,
  children,
  ...rest
}: RowProps) => {
  return (
    <Section
      className={className}
      colorText={color}
      bgColor={bgColor}
      {...rest}
    >
      <Wrapper
        size={size}
        flex={flex}
        nowrap={nowrap}
        marginT={marginT}
        marginB={marginB}
        center={center}
        vcenter={vcenter}
      >
        {children}
      </Wrapper>
    </Section>
  );
};
