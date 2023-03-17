import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Header from '../navigation/header/header';
// import { usePageLoading } from '@/hooks/use-page-loading';
// import { Ellipsis } from '@taal-enterprise/shared-components';

const Footer = dynamic(() => import('../navigation/footer/footer'));

const Main = styled.main`
  flex: 1;
  position: relative;
  z-index: 1; // z-index for tooltips
`;

// const Loading = styled.div`
//   position: fixed;
//   z-index: 9999;
//   width: 36px;
//   height: 32px;
//   border-radius: 4px;
//   bottom: 28px;
//   right: 50px;
//   display: flex;
//   background: ${(p) => p.theme.secondary.main};
//   align-items: center;
//   justify-content: center;
// `;

const Layout = ({ children } : any) => {
  // const { isPageLoading } = usePageLoading();

  return (
    <>
      <Header />
      <Main>
        {/* {isPageLoading && (
          <Loading>
            <Ellipsis size={4} color="black" />
          </Loading>
        )} */}

        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
