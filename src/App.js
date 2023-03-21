import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import './Deusdete.css';
import Footer from './components/layout/Footer';
import Whatsapp from './components/Whatsapp';
import Home from './components/pages/Home';
import Header from './components/Header'
import Products from "./components/Products";

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
