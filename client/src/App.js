import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Pages/Login';
import ForgotPass from './Pages/ForgotPass';
import CreateUserPage from './Pages/CreateUser';
import ChangePass from './Pages/ChangePass';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><LoginPage /></>} />
        <Route path='/ForgotPass' element={<><ForgotPass /></>} />
        <Route path='/CreateUser' element={<><CreateUserPage /></>} />
        <Route path='/ChangePass' element={<><ChangePass /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
