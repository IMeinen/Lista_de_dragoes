import React from 'react';
import {Switch,Route} from 'react-router-dom';

import {Main,Cadastro,Login,Detalhes} from '../pages'

const Routes: React.FC = () => (
  <Switch>
    <Route path={'/'} component={Main} exact/>
    <Route path={'/detalhes/:idDragao'} component={Detalhes} exact/>
    <Route path={'/cadastro'} component={Cadastro} exact/>
  </Switch>
)

export default Routes;