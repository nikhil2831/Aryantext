import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is enabled", "success");
      document.title = 'Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = 'Light mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Aryan Singh" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the Text" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Textform heading="Enter the Text" mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
