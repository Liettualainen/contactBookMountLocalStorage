import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Contactbook } from './ContactBook/ContactBook';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Contactbook />
    </Layout>
  );
};
