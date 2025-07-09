import './App.css';
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

function App() {
  return (
    <>
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
