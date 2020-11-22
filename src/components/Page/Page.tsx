import React, { Children } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
  children?: React.ReactNode;
}

const Page: React.FC = ({ children }: Props) => {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Page;