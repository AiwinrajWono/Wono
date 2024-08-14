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

function App() {
  return (
    <div className="App">
    <AppHeader />
     <Routes> 
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<LoginPage/>}/>
     </Routes>
    <AppFooter />
    </div>
  );
}

export default App;
