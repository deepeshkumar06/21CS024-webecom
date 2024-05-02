import './App.css';
import Nav from './component/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import { Auth } from './component/Auth';
import { Signup } from './component/Signup';

function App() {
  return (
    <div className="App">
      <Auth>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      </Auth>
    </div>
  );
}

export default App;