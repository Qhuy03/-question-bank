import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';
import ListUser from './pages/ListUser';
import { Route, Routes } from 'react-router-dom';
import Question from './pages/Question';

function App() {
  return (
    <Routes>
      <Route path='/' element={<ListUser />} />
      <Route path='/question' element={<Question />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/forgot' element={<ForgotPassword />} />
    </Routes>
    // <SignIn />
    // <ForgotPassword />
    
  );
}

export default App;
