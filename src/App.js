import logo from './logo.svg';
import { Link, Routes,Route,  BrowserRouter as Router } from 'react-router-dom';
 
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Products from './Products';
import LoginForm,{AppWithRouter} from './LoginForm';

 
 

import './App.css';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
        <Link to="/about">
          <button>form</button>
        </Link>
          
         
         
      </header>
      <hr />
      <main>
        <Routes>
          <Route exact path="/"   element={<Home/>} />
          <Route exact path="/lg"   element={<LoginForm/>} />
          <Route exact path="/products"   element={<Products/>} />
          <Route path="/about" element={<About/>}/>
          <Route  path='*' exact={true}
          element={<NotFound/>} />
        </Routes>
      </main>
    </Router>
  );
  }
   


export default App;

