
import './App.css';
import MyBottom from './bottom/MyBottom';
import MyNav from './nav/MyNav';
import Mypres from './presentation/Mypres';
import TicketContainer from './project/ticketContainer';

function App() {
  return (
    <div className="App">
      <MyNav />
      <div id='content'>
        <Mypres />
        <TicketContainer />
      </div>
      <MyBottom />
    </div>
  );
}

export default App;
