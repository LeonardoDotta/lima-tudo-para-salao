import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import './Deusdete.css';
import Footer from './components/layout/Footer';
import Whatsapp from './components/pages/whatsapp/Whatsapp';
import Home from './components/pages/home/Home';
import Header from './components/layout/Header'

function App() {
  return (
    <Router>
      <Header />
    <Routes>
        <Route element={<Home nome='Deusdete Store'/> } path="/">
        </Route>
        <Route element={<Whatsapp />} path="/whatsapp">
        </Route>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
