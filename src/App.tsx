import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/main';
import SubmitReport from './pages/submit-report/report';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/submit-report" element={<SubmitReport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
