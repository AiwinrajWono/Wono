import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';
import Users from './pages/Users';
import Dashboard from './components/HomeDashboard/Dashboard';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/home' element={<Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
