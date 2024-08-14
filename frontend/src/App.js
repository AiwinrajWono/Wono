import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';
import Users from './pages/Users';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import Form from './pages/Form';
import Dashboard from './components/HomeDashboard/Dashboard';
import Services from './pages/Services';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { UserProvider } from './components/UserContext';
import Home from './components/HomeDashboard/Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
    <AppHeader />
     <Routes> 
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/dashboard' element={<Home/>}/>
     </Routes>
    <AppFooter />
    </UserProvider>
    </div>
  );
}

export default App;
