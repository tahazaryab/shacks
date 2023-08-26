import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/main';
import SubmitReport from './pages/submit-report/report';
import PastReports from './pages/past-reports';
import login from './pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PastReports />} />
        <Route path="/home" element={<Main />} />
        <Route path="/my-reports" element={<PastReports />} />
        <Route path="/submit-reports" element={<PastReports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
