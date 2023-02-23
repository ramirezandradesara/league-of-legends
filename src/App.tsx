import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/App.scss';
import ResponsiveAppBar from './components/navbar/ResponsiveAppBar';
import Favorites from './pages/favorites/Favorites';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
