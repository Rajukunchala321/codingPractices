import './App.css';
import React from 'react'
import ClickCounter from './HigherOrder/ClickCounter';
import OverCounter from './HigherOrder/OverCounter';
import RenderCount from './Render/RenderCount';
import RenderClickCounter from './Render/RenderClickCounter';
import RenderHoverCounter from './Render/RenderHoverCounter';
import IndexComponent from './ApiComponent/IndexComponent';
import PostComponent from './ApiComponent/PostComponent';
import ArrayUseState from './useState/ArrayUseState';
import WithoutHook from './UseEffect/WithoutHook';
import DataFetching from './UseEffect/DataFetching';
import SinglePostDataFetch from './UseEffect/SinglePostDataFetch';
import ComponentC from './UseContextHook/ComponentC';

export const UserContent = React.createContext();

function App() {

  return (
    <>
    <UserContent.Provider value="This is UserContent">
      <ComponentC />
    </UserContent.Provider>
    
    <SinglePostDataFetch />
    <DataFetching />
      
     <WithoutHook />
     <ClickCounter />
     <OverCounter />
     
     <RenderCount increment={5} render={(count, handleCounter)=>(
        <RenderClickCounter count={count} handleCounter={handleCounter} />
     )} />
     <RenderCount increment={10} render={(count, handleCounter)=>(
        <RenderHoverCounter count={count} handleCounter={handleCounter} />
     )} />
      <PostComponent />
     <IndexComponent />
     <ArrayUseState />
    
     
    </>
  );
}

export default App;
