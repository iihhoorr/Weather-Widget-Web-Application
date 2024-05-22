import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { CssBaseline, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;