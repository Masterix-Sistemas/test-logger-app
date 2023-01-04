import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './pages/global/Sidebar';
import TestCase from './pages/TestCase';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/test" element={<TestCase />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
