import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/main';
import PastReports from './pages/past-reports';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reports" element={<PastReports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
