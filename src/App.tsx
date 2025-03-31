import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import CharacterSheet from './views/CharacterSheet';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#800000',
      light: '#ff0000',
      dark: '#800000',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CharacterSheet />
      </ThemeProvider>
    </>
  );
}

export default App;

import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
