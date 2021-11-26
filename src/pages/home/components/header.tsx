import { Layout } from 'antd';
import { ReactElement } from 'react';
import Style from '../index.module.less';
console.log(Style, 'Style');
debugger;
const { Header } = Layout;

interface titleProps {
  title?: string;
}

const Title = (props: titleProps) => {
  return (
    <div className={Style.title}>
      <span>{props.title || '网易云'}</span>
    </div>
  );
};

const LayoutHead = (): ReactElement => {
  return (
    <Header className={Style.header}>
      <Title />
    </Header>
  );
};

export default LayoutHead;
