import logo from './logo.svg';
import './App.css';
import ClickCounter from './HigherOrder/ClickCounter';
import OverCounter from './HigherOrder/OverCounter';
import RenderCount from './Render/RenderCount';
import RenderClickCounter from './Render/RenderClickCounter';
import RenderHoverCounter from './Render/RenderHoverCounter';
function App() {
  return (
    <>
     <ClickCounter />
     <OverCounter />

     <RenderCount increment={5} render={(count, handleCounter)=>(
        <RenderClickCounter count={count} handleCounter={handleCounter} />
     )} />
     <RenderCount increment={10} render={(count, handleCounter)=>(
        <RenderHoverCounter count={count} handleCounter={handleCounter} />
     )} />


    </>
  );
}

export default App;
