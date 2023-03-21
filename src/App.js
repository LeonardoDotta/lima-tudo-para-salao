import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import './Deusdete.css';
import Footer from './components/layout/Footer';
import Whatsapp from './components/Whatsapp.js';
import Home from './components/pages/Home';
import Card from './components/Card';

function App() {
  return (
    <Router>
    <Routes>
        <Route element={<Whatsapp />} path="/whatsapp">
        </Route>
        <Route element={<Card />} path="/">
        </Route>
        <Route element={<Card />} path="/">
        </Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
