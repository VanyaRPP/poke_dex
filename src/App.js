import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';

const App =()=> {
  return (
    <>
      <Header/>
      <Content/>
    </>
  );
}

export default App;
