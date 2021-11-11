import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Navigate, Route, Routes } from 'react-router';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
