import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation';
import { useState } from 'react';
import {Link} from 'react-router-dom';

function App() {

  const [navigation, setNavigation] = useState(false)

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header" onClick={()=>setNavigation(!navigation)}>
      <p>Suggestions</p>
      {navigation && <div  className="Navigation-items">
      {/* <li><a href="/movies">Movies</a></li> */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Movies">Movies</Link></li>
      <li><Link to="/places">Places</Link></li>
      <li><Link to="/restaurants">Restaurants</Link></li>
      <li><Link to="/others">Other suggestions</Link></li>
      </div>}
      </header>
      <Navigation/>
    </div>
    </BrowserRouter>
  );
}

export default App;
