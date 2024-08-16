import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';
import Users from './pages/Users';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import Services from './pages/Services';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import { UserProvider } from './components/UserContext';
import Home from './components/HomeDashboard/Home';
import Register from './pages/Register';
import Career from './pages/Career';
import Dashboard from './components/HomeDashboard/Dashboard';
import JobDetails from './pages/JobDetails';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Career from './pages/Career';


function App() {
  return (
    <div>
      <UserProvider>
    <AppHeader />
     <Routes> 
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/career' element={<Career/>}/>
     </Routes>
    <AppFooter />
    </UserProvider>
    </div>
  );
}

export default App;
