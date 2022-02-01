import './App.css';
import LoginPage from './views/LoginPage';
import TranslationPage from './views/TranslationPage';
import ProfilePage from './views/ProfilePage';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './context/UserContext';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <Header />
      <div className="App">
            <Routes>
            <Route path = "/" element = {<LoginPage/>}></Route>
            <Route path = "/translation" element = {<TranslationPage/>}></Route>
            <Route path = "/profile" element = {<ProfilePage/>}></Route>
            </Routes>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
