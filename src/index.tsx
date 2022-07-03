import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './components/language/i18n';

import { ThemeProvider } from '@mui/material';
import { theme } from './configs/theme';
import { Root } from './pages/Root';
import {} from './components/Footer/Footer';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
