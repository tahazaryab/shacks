import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../src/pages/main';
import Login from '../src/pages/login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
