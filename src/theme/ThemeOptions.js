import { deepmerge } from '@mui/utils';
import palette from './palette';
import spacing from './spacing';
import shadows from './shadows';
import overrides from './overrides';
import typography from './typography';
import breakpoints from './breakpoints';

const themeOptions = (settings) => {
  const { mode, themeColor } = settings;

  const mergedThemeConfig = deepmerge(
    {
      breakpoints: breakpoints(),
      components: overrides(),
      palette: palette(mode),
      ...spacing,
      shape: {
        borderRadius: 6
      },
      mixins: {
        toolbar: {
          minHeight: 64
        }
      },
      shadows: shadows(mode),
      typography
    },
    {}
  );

  return deepmerge(mergedThemeConfig, {
    palette: {
      primary: {
        ...(mergedThemeConfig.palette
          ? mergedThemeConfig.palette[themeColor]
          : palette(mode).primary)
      }
    }
  });
};

export default themeOptions;
