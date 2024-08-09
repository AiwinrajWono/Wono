import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';
import Users from './pages/Users';
import AppHeader from './layout/AppHeader';
import AppFooter from './layout/AppFooter';

function App() {
  return (
    <div className="App">
    <AppHeader />
     <Routes> 
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
      <Route path='/users' element={<Users/>}/>
     </Routes>
    <AppFooter />
    </div>
  );
}

export default App;
