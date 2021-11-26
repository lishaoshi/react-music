import Style from './index.module.scss';
import { Layout } from 'antd';
import { ReactElement } from 'react';
const { Header, Content, Sider } = Layout;

// interface HomeProps {}

const Head = () => {
  return <Header className={Style.header}>header</Header>;
};

const HomeContent = () => {
  return (
    <Layout className={Style.content}>
      <Sider className={Style.siderBar} width={200}>
        sider
      </Sider>
      <Main />
    </Layout>
  );
};

const Main = () => {
  return (
    <Layout>
      <Content>Main </Content>
    </Layout>
  );
};

const Home = (): ReactElement => {
  return (
    <Layout>
      <Head />

      <HomeContent />
    </Layout>
  );
};

export default Home;
