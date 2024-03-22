import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar>Timer</Navbar>
      <CountdownTimer /> 
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
