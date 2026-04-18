import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './features/auth/pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<h1>Colegio Bernardo O'Higgins - Plataforma Educativa</h1>} />
          <Route path="/registro" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;