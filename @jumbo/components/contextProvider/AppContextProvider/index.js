import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import defaultContext from './defaultContext';
import { darkTheme, lightTheme, semiDarkTheme } from '../../../../theme/themeColors';

const initialThemeValue = defaultContext.theme;
const otherThemes = {
  light: lightTheme,
  'semi-dark': semiDarkTheme,
  dark: darkTheme,
};

const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultContext.defaultLng);
  const [theme, setTheme] = useState(initialThemeValue);
  const [themeType, setThemeType] = useState(defaultContext.themeType);
  const [layout, setLayout] = useState(defaultContext.layout);
  const [cardRadius, setCardRadius] = useState(defaultContext.theme.overrides.MuiCard.root.borderRadius);
  const [direction, setDirection] = useState(initialThemeValue.direction);
  const [showTourGuide, setTourGuideStatus] = useState(false);

  const contextValue = React.useMemo(() => {
    return {
      locale,
      setLocale,
      theme,
      setTheme,
      layout,
      setLayout,
      themeType,
      setThemeType,
      cardRadius,
      setCardRadius,
      direction,
      setDirection,
      showTourGuide,
      setTourGuideStatus,
    };
  }, [locale, theme, themeType, layout, direction, showTourGuide, cardRadius]);

  useEffect(() => {
    setTheme({
      ...theme,
      palette: {
        ...theme.palette,
        ...otherThemes[themeType].palette,
      },
      overrides: {
        ...theme.overrides,
        ...otherThemes[themeType].overrides,
      },
    });
  }, [themeType]);

  useEffect(() => {
    setTheme({
      ...theme,
      overrides: {
        ...theme.overrides,
        MuiCard: {
          ...theme.overrides.MuiCard,
          root: { ...theme.overrides.MuiCard.root, borderRadius: cardRadius },
        },
      },
    });
  }, [cardRadius]);

  useEffect(() => {
    setTheme({
      ...theme,
      direction: direction,
    });
    document.body.setAttribute('dir', direction);
  }, [direction]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
