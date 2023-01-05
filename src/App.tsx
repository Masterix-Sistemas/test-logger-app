import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './pages/Global/Sidebar';
import Topbar from './pages/Global/Topbar';
import Test from './pages/Test';
import TestCase from './pages/TestCase';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test" element={<TestCase />} />
            <Route path="/test/:id" element={<Test />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
