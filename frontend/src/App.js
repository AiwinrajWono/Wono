import { Routes, Route } from 'react-router-dom';
import AppStruct from './structure/AppStruct';
import CompTest from './pages/CompTest';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<AppStruct />} />
      <Route path="/test" element={<CompTest />} />
     </Routes>
    </div>
  );
}

export default App;
