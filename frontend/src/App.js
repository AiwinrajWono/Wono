import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';
import Users from './pages/Users';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';
import Form from './pages/Form';
import Dashboard from './components/HomeDashboard/Dashboard';
import JobDetails from './pages/JobDetails';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Career from './pages/Career';


function App() {
  return (
    <div className="App">
    <AppHeader/>
     <Routes> 
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/jobdetails/:id/:title' element={<JobDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/career' element={<Career/>}/>
      
     </Routes>
     {/* <AppFooter/> */}
     
    
    </div>
  );
}

export default App;
