// @ts-nocheck
import GlobalStyle from '@/components/base/global-style';
import Layout from '@/components/layout/layout';

const AppProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Layout>{children}</Layout>
    </>
  );
};

export default AppProvider;
