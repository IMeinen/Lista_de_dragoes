import React, { useEffect,useCallback } from 'react';
import Page from '../../components/Page/Page';
import DragonApi from '../../api/dragons';
// import { Container } from './styles';

const Main: React.FC = () => {

  const getListData = useCallback(async () => {
    const { fail, data } = await DragonApi.getAll();

    if (fail) {
      console.log(fail)
    }
    if (data) {
      console.log(data)
    }
  },[])

  useEffect(() => {
    getListData();
  }, [getListData]);

  return (
    <Page>
      <h1>Main</h1>
    </Page>
  )
}

export default Main;