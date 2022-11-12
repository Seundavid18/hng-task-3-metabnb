import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Home from './pages/Home/Home';
import NftPlace from './pages/NftPlace/NftPlace';


function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<NftPlace />} />
      </Route>
    </Routes>
  );
}

export default App;
