import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import {DefaultTheme as NavigationLightTheme, DarkTheme as NavigationDarkTheme} from '@react-navigation/native';
import type {Theme as _NavigationTheme} from '@react-navigation/native';

const paperLightTheme = {
  ...MD3LightTheme,
  roundness: 12,
  colors: {
    ...MD3LightTheme.colors,

    // primary: '#a14000',
    primary: '#EF6F29',
    onPrimary: '#ffffff',
    primaryContainer: '#ffdbcc',
    onPrimaryContainer: '#351000',

    secondary: '#76574a',
    onSecondary: '#ffffff',
    secondaryContainer: '#ffdbcc',
    onSecondaryContainer: '#2c160b',

    tertiary: '#665f31',
    onTertiary: '#ffffff',
    tertiaryContainer: '#eee4a9',
    onTertiaryContainer: '#201c00',

    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#410002',

    // background: '#fffbff',
    background: '#F6F3F0',
    onBackground: '#201a18',

    surface: '#fffbff',
    onSurferface: '#201a18',

    outline: '#85736c',

    surfaceVariant: '#f4ded5',
    onSurfaceVariant: '#52443d',
  },
};

const paperDarkTheme = {
  ...MD3DarkTheme,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,

    primary: '#ffb694',
    onPrimary: '#571f00',
    primaryContainer: '#7b2f00',
    onPrimaryContainer: '#ffdbcc',

    secondary: '#e6bead',
    onSecondary: '#442a1f',
    secondaryContainer: '#5d4033',
    onSecondaryContainer: '#ffdbcc',

    tertiary: '#d1c88f',
    onTertiary: '#363107',
    tertiaryContainer: '#4d471b',
    onTertiaryContainer: '#eee4a9',

    error: '#ffb4ab',
    onError: '#690005',
    errorContainer: '#93000a',
    onErrorContainer: '#ffdad6',

    background: '#201a18',
    onBackground: '#ede0db',

    surface: '#201a18',
    onSurferface: '#ede0db',

    outline: '#a08d85',

    surfaceVariant: '#52443d',
    onSurfaceVariant: '#d7c2ba',
  },
};

interface NavigationTheme extends _NavigationTheme {
  colors: _NavigationTheme['colors'] & {
    onBackground: string;
    surfaceVariant: string;
    primaryContainer: string;
  };
}

const navigationLightTheme: NavigationTheme = {
  ...NavigationLightTheme,
  colors: {
    ...NavigationLightTheme.colors,
    primary: paperLightTheme.colors.primary,
    background: paperLightTheme.colors.background,
    onBackground: paperLightTheme.colors.onBackground,
    surfaceVariant: paperLightTheme.colors.surfaceVariant,
    primaryContainer: paperLightTheme.colors.primaryContainer,
  },
};

const navigationDarkTheme: NavigationTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: paperDarkTheme.colors.primary,
    background: paperDarkTheme.colors.background,
    onBackground: paperDarkTheme.colors.onBackground,
    surfaceVariant: paperDarkTheme.colors.surfaceVariant,
    primaryContainer: paperDarkTheme.colors.primaryContainer,
  },
  dark: true,
};

export {paperLightTheme, paperDarkTheme, navigationLightTheme, navigationDarkTheme};
export type {NavigationTheme};
