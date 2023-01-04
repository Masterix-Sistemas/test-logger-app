import { CssBaseline, ThemeProvider } from '@mui/material';
import Sidebar from './pages/global/Sidebar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content"></main>
      </div>
    </ThemeProvider>
  );
}

export default App;
