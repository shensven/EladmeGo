import {atom} from 'jotai';
import type {MD3Theme} from 'react-native-paper';
import {navigationLightTheme, paperLightTheme} from '../appearance';
import type {NavigationTheme} from '../appearance';

const themeSchemeAtom = atom<'light' | 'dark' | 'system'>('system');
const paperThemeAtom = atom<MD3Theme>(paperLightTheme);
const navigationThemeAtom = atom<NavigationTheme>(navigationLightTheme);

const accessTokenAtom = atom<string>('');

export {themeSchemeAtom, paperThemeAtom, navigationThemeAtom, accessTokenAtom};
