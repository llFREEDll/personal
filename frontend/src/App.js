import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ingreso from './pages/Ingreso';
import Main from './pages/Main';
import Vista from './pages/Vista';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/vista" element={<Vista />} />
        <Route exact path="/ingreso" element={<Ingreso />} />
      </Routes>
    </Router>

  );
}

export default App;
