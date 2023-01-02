
import './App.css';
import MyBottom from './bottom/MyBottom';
import MyNav from './nav/MyNav';
import Mypres from './presentation/Mypres';

function App() {
  return (
    <div className="App">
      <MyNav />
      <div id='content'>
        <Mypres />
      </div>
      <MyBottom />
    </div>
  );
}

export default App;
