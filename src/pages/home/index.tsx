import Style from './index.module.scss'
import { Layout, Button } from 'antd';

const { Header, Content, Sider } = Layout;

interface HomeProps {}

const Head = (props: HomeProps) => {
  return <Header  className={ Style.header }>
    header
  </Header>
}

const HomeContent = () => {
  return <Layout className={ Style.content }>
    <Sider className={Style.siderBar}  width={200}>sider</Sider>
    <Main />
  </Layout>
}

const Main = () => {
  return <Layout>
    <Content>Main </Content>
  </Layout>
}

const Home = () => {
  return <Layout>
    <Head />
    <HomeContent />
  </Layout>
}

export default Home