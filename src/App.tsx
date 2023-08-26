import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/main';
import Login from '../src/pages/login';
import SubmitReport from './pages/submit-report/report';
import PastReports from './pages/past-reports';

const App = () => {
  return (
    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/my-reports" element={<PastReports />} />
        <Route path="/submit-report" element={<SubmitReport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
