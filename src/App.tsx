import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import ResponsiveAppBar from './components/navbar/ResponsiveAppBar';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/favorites" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
