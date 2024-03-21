import './App.css';
import Navbar from './components/Navbar/Navbar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
  return (
    <div >
    <Navbar >Timer</Navbar>
      <CountdownTimer />
    </div>
  );
}

export default App;
