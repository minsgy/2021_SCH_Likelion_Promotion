import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import MainPage from './component/MainPage';
const App = () => {
  return (
    <>
    <Switch>
      {/* 페이지 입장 시, 메인 페이지 컴포넌트 */}
      <Route exact path='/' component={MainPage} />
      <Redirect from='*' to='/' />
    </Switch>
    </>
  );
}

export default App;
