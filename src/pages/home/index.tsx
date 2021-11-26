import Style from './index.module.less';
import { Layout } from 'antd';
import { ReactElement } from 'react';
import LayoutHeader from './components/header';
const { Content, Sider } = Layout;

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
      <LayoutHeader />

      <HomeContent />
    </Layout>
  );
};

export default Home;
