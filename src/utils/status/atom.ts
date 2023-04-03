import {atom} from 'jotai';
import type {MD3Theme} from 'react-native-paper';
import {navigationLightTheme, paperLightTheme} from '@/utils/appearance';
import type {SystemBarStyle} from 'react-native-bars';
import type {NavigationTheme} from '@/utils/appearance';
import type {PassQr} from '../passQr';

const themeSchemeAtom = atom<'light' | 'dark' | 'system'>('system');
const statusBarStyleAtom = atom<SystemBarStyle>('dark-content');
const paperThemeAtom = atom<MD3Theme>(paperLightTheme);
const navigationThemeAtom = atom<NavigationTheme>(navigationLightTheme);

const accessTokenAtom = atom<string>('');
const passQrAtom = atom<PassQr | undefined>(undefined);

export {themeSchemeAtom, statusBarStyleAtom, paperThemeAtom, navigationThemeAtom, accessTokenAtom, passQrAtom};
