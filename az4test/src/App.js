
import './App.css';
import ParentComponent from './components/ParentComponent/parentComponent';

function App() {
  let divHeight = 300;
  window.setDivHeight = (height) => divHeight = height

  return (
    <div className="App">
        <ParentComponent divHeight={divHeight} />
    </div>
  );
}

export default App;
