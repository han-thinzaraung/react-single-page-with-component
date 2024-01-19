
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Service from './Service.js'
import Footer from './Footer.js'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Home/>
        <About/>
        <Service/>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
