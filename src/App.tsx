import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Router/>
    </div>
  );
}

export default App;