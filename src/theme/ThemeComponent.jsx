import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import themeConfig from '@/config/theme';
import themeOptions from './ThemeOptions';
import GlobalStyling from './globalStyles';

const ThemeComponent = (props) => {
  const { settings, children } = props;

  let theme = createTheme(themeOptions(settings));
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme)} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeComponent;
